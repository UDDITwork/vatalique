import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Testimonials.css';

interface TestimonialData {
    title: string;
    description: string;
    roi: string;
    revenue: string;
    quote: string;
    author: string;
    role: string; // e.g., Founder of CloudFlow
    image: string;
    challenges: string[]; // for highlighted text
}

const testimonials: TestimonialData[] = [
    {
        title: "Max's SaaS Revolution",
        description: "Max, the founder of CloudFlow, implemented AI automation in their processes. This move slashed operational costs by 50% and boosted team productivity by 75%, empowering the company to accelerate growth and expand faster.",
        roi: "60%",
        revenue: "45%",
        quote: "They took the time to understand our Challenges, identified our Target Audience, and made our brand shine. Their solutions were very effective!",
        author: "Max",
        role: "Founder of CloudFlow",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop", // Placeholder or from assets
        challenges: ["Challenges", "Target Audience"]
    }
];

const Testimonials = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".testimonial-card", {
                y: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: ".testimonials-section",
                    start: "top center+=100",
                }
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section className="testimonials-section" ref={containerRef}>
            <div className="testimonials-container">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonial-wrapper">
                        <div className="testimonial-card">
                            <div className="card-content">
                                <div className="card-header">
                                    <div className="user-icon">👤</div>
                                    <div className="menu-dots">•••</div>
                                </div>

                                <div className="card-body">
                                    <div className="text-content">
                                        <h3 className="testimonial-title">{testimonial.title}</h3>
                                        <p className="testimonial-desc">{testimonial.description}</p>

                                        <div className="stats-grid">
                                            <div className="stat-box">
                                                <span className="stat-value">{testimonial.roi}</span>
                                                <span className="stat-label">Increase in ROI</span>
                                            </div>
                                            <div className="stat-box">
                                                <span className="stat-value">{testimonial.revenue}</span>
                                                <span className="stat-label">Boost in Revenue</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="image-content">
                                        <img src={testimonial.image} alt={testimonial.author} className="author-image" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="testimonial-quote">
                            <p>
                                They took the time to understand our <em>Challenges</em>, identified our <em>Target Audience</em>, and made our brand shine. Their solutions were very effective!
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Testimonials;
