import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import './Contact.css';

const Contact = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from('.contact-title', {
                y: 50,
                opacity: 0,
                duration: 1,
                ease: 'power3.out'
            });

            gsap.from('.glass-panel', {
                y: 30,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                delay: 0.3
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <div id="contact" className="contact-page" ref={containerRef}>
            <div className="contact-container">

                {/* Top Section split: Title/Menu on Left, Form on Right (as per screenshot roughly) but adapted for web */}

                <div className="contact-main-grid">

                    {/* Left Column */}
                    <div className="contact-left">
                        <h1 className="contact-title">Let's <br />Talk<span className="accent">!</span></h1>

                        <div className="info-cards">
                            <div className="info-card glass-panel">
                                <span className="icon">✉️</span>
                                <div className="info-content">
                                    <p className="label">Email</p>
                                    <a href="mailto:hello@vatalique.com">hello@vatalique.com</a>
                                </div>
                            </div>

                            <div className="info-card glass-panel">
                                <span className="icon">📞</span>
                                <div className="info-content">
                                    <p className="label">Phone</p>
                                    <a href="tel:+15550000000">+1 (555) 000-0000</a>
                                </div>
                            </div>

                            <div className="info-card glass-panel">
                                <span className="icon">📍</span>
                                <div className="info-content">
                                    <p className="label">Office</p>
                                    <p>123 Innovation Drive, Tech City</p>
                                </div>
                            </div>
                        </div>

                        {/* Links Section (Menu/Services) */}
                        <div className="links-section glass-panel">
                            <div className="links-col">
                                <h4>Menu</h4>
                                <a href="#home">Home</a>
                                <a href="#about">About</a>
                                <a href="#contact">Contact</a>
                            </div>
                        </div>

                    </div>

                    {/* Right Column - Form */}
                    <div className="contact-right">
                        <form className="contact-form glass-panel">
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="John Doe" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="john@example.com" />
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows={6} placeholder="How can we help you automate?"></textarea>
                            </div>

                            <button type="submit" className="submit-btn">Submit Request</button>
                        </form>
                    </div>

                </div>

                {/* Bottom Footer Section */}
                <div className="contact-footer glass-panel">
                    <div className="socials">
                        <span>Follow us:</span>
                        <div className="social-icons">
                            <a href="#">X</a>
                            <a href="#">In</a>
                            <a href="#">Ig</a>
                        </div>
                    </div>

                    <div className="newsletter">
                        <input type="email" placeholder="Subscribe for newsletter" />
                        <button className="subscribe-btn">Subscribe</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Contact;
