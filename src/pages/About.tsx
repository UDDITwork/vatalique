import { useEffect, useRef } from 'react';
import SplitText from '../components/SplitText';
import Testimonials from '../components/Testimonials';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './About.css';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Animate text sections
            gsap.utils.toArray('.animate-text').forEach((element: any) => {
                gsap.from(element, {
                    y: 30,
                    opacity: 0,
                    duration: 1,
                    scrollTrigger: {
                        trigger: element,
                        start: "top 80%",
                        toggleActions: "play none none reverse"
                    }
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div id="about" className="about-page" ref={containerRef}>
            {/* Hero Section */}
            <section className="about-hero">
                <div className="content-wrapper">
                    <SplitText
                        text="Driving the Future of Automation"
                        className="about-title"
                        delay={50}
                        duration={0.8}
                        ease="power3.out"
                        splitType="words"
                        from={{ opacity: 0, y: 50 }}
                        to={{ opacity: 1, y: 0 }}
                        threshold={0.2}
                        textAlign="center"
                    />
                    <p className="about-subtitle animate-text">
                        We are Vatalique. We turn complex workflows into effortless innovation.
                    </p>
                </div>
            </section>

            {/* Mission Section */}
            <section className="mission-section">
                <div className="content-wrapper">
                    <div className="mission-grid">
                        <div className="mission-content animate-text">
                            <h2>Who We Are</h2>
                            <p>
                                At Vatalique, we aren't just developers; we are architects of efficiency.
                                Born from a passion for eliminating the mundane, we specialize in building
                                <strong>intelligent automation systems</strong> that empower businesses to reclaim their most valuable asset: time.
                            </p>
                            <p>
                                Our team combines deep technical expertise in AI, Machine Learning, and Enterprise Integration
                                with a strategic understanding of business growth. We don't just patch problems; we re-engineer
                                how your business operates to be faster, smarter, and more scalable.
                            </p>
                        </div>
                        <div className="mission-stats animate-text">
                            <div className="stat-card glass-card">
                                <span className="count">100+</span>
                                <span className="label">Workflows Automations</span>
                            </div>
                            <div className="stat-card glass-card">
                                <span className="count">50+</span>
                                <span className="label">Enterprise Clients</span>
                            </div>
                            <div className="stat-card glass-card">
                                <span className="count">10k+</span>
                                <span className="label">Hours Saved</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="values-section">
                <div className="content-wrapper">
                    <h2 className="section-title animate-text">Our Core Philosophy</h2>
                    <div className="values-grid">
                        <div className="value-card glass-card animate-text">
                            <div className="icon">🚀</div>
                            <h3>Speed with Precision</h3>
                            <p>We deploy rapidly, but never compromise on the stability and security of your infrastructure.</p>
                        </div>
                        <div className="value-card glass-card animate-text">
                            <div className="icon">🧠</div>
                            <h3>Intelligent Design</h3>
                            <p>Every automation is designed with future scalability in mind, using the latest in AI reasoning.</p>
                        </div>
                        <div className="value-card glass-card animate-text">
                            <div className="icon">🤝</div>
                            <h3>Partnership First</h3>
                            <p>We work alongside your team, ensuring that our solutions align perfectly with your company culture and goals.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <div id="testimonials">
                <Testimonials />
            </div>

        </div>
    );
};

export default About;
