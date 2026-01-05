import { useRef, useEffect, useState, CSSProperties, createElement, RefObject } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface SplitTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string;
  splitType?: 'chars' | 'words' | 'lines';
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: 'left' | 'center' | 'right';
  tag?: 'p' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  onLetterAnimationComplete?: () => void;
}

const SplitText = ({
  text,
  className = '',
  delay = 50,
  duration = 0.8,
  ease = 'power3.out',
  splitType = 'chars',
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.1,
  rootMargin = '-100px',
  textAlign = 'center',
  tag = 'p',
  onLetterAnimationComplete
}: SplitTextProps) => {
  const containerRef = useRef<HTMLElement>(null);
  const [chars, setChars] = useState<string[]>([]);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const animationCompletedRef = useRef(false);
  const onCompleteRef = useRef(onLetterAnimationComplete);

  useEffect(() => {
    onCompleteRef.current = onLetterAnimationComplete;
  }, [onLetterAnimationComplete]);

  useEffect(() => {
    if (document.fonts.status === 'loaded') {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    }
  }, []);

  useEffect(() => {
    if (splitType === 'chars') {
      setChars(text.split(''));
    } else if (splitType === 'words') {
      setChars(text.split(' '));
    } else {
      setChars([text]);
    }
  }, [text, splitType]);

  useGSAP(
    () => {
      if (!containerRef.current || !fontsLoaded || chars.length === 0) return;
      if (animationCompletedRef.current) return;

      const elements = containerRef.current.querySelectorAll('.split-char');
      if (elements.length === 0) return;

      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || 'px' : 'px';
      const sign =
        marginValue === 0
          ? ''
          : marginValue < 0
            ? `-=${Math.abs(marginValue)}${marginUnit}`
            : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      gsap.fromTo(
        elements,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: containerRef.current,
            start,
            once: true,
          },
          onComplete: () => {
            animationCompletedRef.current = true;
            onCompleteRef.current?.();
          },
        }
      );

      return () => {
        ScrollTrigger.getAll().forEach(st => {
          if (st.trigger === containerRef.current) st.kill();
        });
      };
    },
    {
      dependencies: [chars, fontsLoaded, delay, duration, ease, from, to, threshold, rootMargin],
      scope: containerRef
    }
  );

  const style: CSSProperties = {
    textAlign,
    overflow: 'hidden',
    display: 'inline-block',
    whiteSpace: splitType === 'words' ? 'pre-wrap' : 'normal',
    wordWrap: 'break-word',
  };

  const charStyle: CSSProperties = {
    display: 'inline-block',
    willChange: 'transform, opacity',
  };

  const renderContent = () => (
    <>
      {chars.map((char, index) => (
        <span
          key={index}
          className="split-char"
          style={{
            ...charStyle,
            marginRight: splitType === 'words' && index < chars.length - 1 ? '0.3em' : undefined,
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </>
  );

  return createElement(
    tag,
    {
      ref: containerRef as RefObject<HTMLHeadingElement>,
      style,
      className: `split-parent ${className}`,
    },
    renderContent()
  );
};

export default SplitText;
