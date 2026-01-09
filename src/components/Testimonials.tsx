import { useRef, useEffect } from "react";

import "./Testimonials.css";

interface TestimonialData {
    title: string;
    description: string;
    roi: string;
    revenue: string;
    quote: string;
    author: string;
    role: string;
    image: string;
}

const testimonials: TestimonialData[] = [
    {
        title: "Rohan's System Overhaul",
        description:
            "Rohan, CTO at TechSphere, needed a complete overhaul of their legacy CRM. Vatalique's automation reduced manual entry by 90%, allowing the team to focus on innovation rather than administration.",
        roi: "85%",
        revenue: "60%",
        quote:
            "What impressed me most was how Vatalique didn't just rush to code. They spent weeks just understanding our full requirements to perceive the depth of the problem. The result? A flawless system.",
        author: "Rohan Patel",
        role: "CTO at TechSphere",
        image:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1887&auto=format&fit=crop",
    },
    {
        title: "Ananya's Workflow Magic",
        description:
            "InnovateAI struggled with fragmented tools. Our solution unified their stack, cutting cross-platform lag to zero and synchronizing data in real-time.",
        roi: "70%",
        revenue: "50%",
        quote:
            "Many agencies promise speed, but Vatalique connects speed with depth. They really took time to understand our nuanced workflows before automating them.",
        author: "Ananya Gupta",
        role: "Founder of InnovateAI",
        image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop",
    },
    {
        title: "Vikram's Scaling Success",
        description:
            "FutureScale needed to handle 10x traffic. We architected a scalable cloud solution that handled the load without a hitch, ensuring 99.99% uptime.",
        roi: "95%",
        revenue: "120%",
        quote:
            "The team at Vatalique perceives depth in requirements like no other. They dug deep into our legacy systems and provided a solution that was robust, not just a quick fix.",
        author: "Vikram Singh",
        role: "Director at FutureScale",
        image:
            "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop",
    },
    {
        title: "Meera's Operational Zen",
        description:
            "Operations were chaotic. We implemented intelligent agents that sorted, prioritized, and routed tasks, bringing calm and order to the chaos.",
        roi: "50%",
        revenue: "35%",
        quote:
            "I appreciated their patience. They take the time to deeply understand every requirement. Honest, genuine, and technically brilliant work.",
        author: "Meera Reddy",
        role: "VP of Operations",
        image:
            "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop",
    },
    // Duplicating for seamless loop effect if needed, but managing via CSS/GSAP is better.
];

const Testimonials = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Clone items for seamless marquee
        if (!scrollerRef.current) return;

        const scrollerContent = Array.from(scrollerRef.current.children);
        scrollerContent.forEach((item) => {
            const duplicatedItem = item.cloneNode(true);
            (duplicatedItem as HTMLElement).setAttribute('aria-hidden', 'true');
            scrollerRef.current?.appendChild(duplicatedItem);
        });

    }, []);

    return (
        <section className="testimonials-section" ref={containerRef}>
            <h2 className="testimonials-header">What our clients say</h2>
            <div className="testimonials-scroller" ref={scrollerRef}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-wrapper">
                        <div className="testimonial-card">
                            <div className="card-content">
                                <div className="card-header">
                                    <div className="user-icon">👤</div>
                                    <div className="menu-dots">•••</div>
                                </div>

                                <div className="card-body">
                                    <div className="image-content">
                                        <img
                                            src={testimonial.image}
                                            alt={testimonial.author}
                                            className="author-image"
                                        />
                                    </div>

                                    <div className="text-content">
                                        <h3 className="testimonial-title">{testimonial.title}</h3>
                                        <p className="testimonial-desc">
                                            {testimonial.description}
                                        </p>

                                        <div className="stats-grid">
                                            <div className="stat-box">
                                                <span className="stat-value">{testimonial.roi}</span>
                                                <span className="stat-label">ROI</span>
                                            </div>
                                            <div className="stat-box">
                                                <span className="stat-value">
                                                    {testimonial.revenue}
                                                </span>
                                                <span className="stat-label">Revenue</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-quote">
                            <p>"{testimonial.quote}"</p>
                            <div className="citation">
                                <cite>{testimonial.author}</cite>
                                <span>{testimonial.role}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
