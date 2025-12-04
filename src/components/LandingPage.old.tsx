import { Building2, Shield } from 'lucide-react';
import React from 'react';
import { UserPlus, LogIn, Users, Bed, Home, Wifi, BookOpen, Heart } from 'lucide-react';
import UBotswana from '../assets/UBotswana.png';

import './Landing Page.css'; 


export default function LandingPage({ onNavigateToAuth, onNavigateToGuestPortal }) {
    return (
        <div className="landing-root">
            <section className="hero-section">
                <div className="hero-bg">
                    <img 
                    src="https://images.unsplash.com/photo-1635936612557-3491e1db5587"
            alt="Background"
                    />
                </div>

                <div className="hero-content">
                    <div className="hero-title-box">
                        <img src={UBotswana} alt="University of Botswana" className="hero-icon" />
                        <h1 className="hero-title">Bonno</h1>
                    </div>

                    <p className="hero-subtitle">
                        University of Botswana Student Housing System
                    </p>

                    <p className="hero-description">
                        Your gateway to quality, affordable on-campus accommdation.
                        Experience comfortable living with modern amenities, security, and a vibrant student community.
                    </p>

                    <div className="hero-buttons">
                        <button className="btn-primary" onClick={onNavigateToAuth}>
                            <LogIn className="btn-icon"/> Login / Sign Up
                        </button>

                        <button className="btn-outline" onClick={onNavigateToGuestPortal}>
                            <UserPlus className="btn-icon"/> Visitor Portal
                        </button>


                    </div>
                </div>
                <div className="wave-divider"></div>
            </section>

            <section className="features-section">
                <div className="section-header">
                    <h2 className="section-title">Why Choose Bonno Housing?</h2>
                    <p className="section-sub">Everything you need for a successful academic journey</p>
                </div>


            <div className="features-grid">
                <div className="feature-card">
                    <div className="feature-icon bg-theme"><Shield/></div>
                    <h3>24/7 Security</h3>
                    <p>Round-the-clock security personnel ensuring your safety at all times with CCTV surveillance and controlled access.</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon bg-theme"><Wifi/></div>
                    <h3>High-Speed Internet</h3>
                    <p>Reliable fiber-optic internet connectivity throughout the campus for seamless studying and entertainment.</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon bg-theme"><BookOpen/></div>
                    <h3>Study Spaces</h3>
                    <p>Dedicated quiet study areas and group discussion rooms equipped with whiteboards and comfortable seating.</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon bg-theme"><Heart/></div>
                    <h3>Wellness Support</h3>
                    <p>On-site health services, counseling support, and recreational facilities for your physical and mental wellbeing.</p>
                </div>
            </div>
            
            <div className="features-grid" style={{marginTop: '2rem'}}>
                <div className="feature-card">
                    <div className="feature-icon bg-theme"><Building2/></div>
                    <h3>Prime Location</h3>
                    <p>Walking distance from lecture halls, library, dining halls, and sports facilities.</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon bg-theme"><Bed/></div>
                    <h3>Furnished Rooms</h3>
                    <p>Fully furnished with bed, mattress, study desk, chair, wardrobe, and essential amenities.</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon bg-theme"><Users/></div>
                    <h3>Vibrant Community</h3>
                    <p>Join a diverse student community with regular events, study groups, and cultural activities.</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon bg-theme"><Home/></div>
                    <h3>Modern Facilities</h3>
                    <p>Laundry services, common kitchens, TV lounges, and emergency maintenance support available.</p>
                </div>
            </div>
            </section>

            <section className="housing-options-section">
                <div className="section-header">
                    <h2 className="section-title">Our Housing Options</h2>
                    <p className="section-sub">Choose from a variety of accommodation types to suit your needs and preferences</p>
                </div>

                <div className="housing-grid">
                    <div className="housing-card">
                        <div className="housing-icon">
                            <Building2 className="icon" />
                        </div>
                        <h3>Las Vegas</h3>
                        <p>Premium student accommodation with modern amenities and spacious rooms. Features include en-suite bathrooms, study areas, and recreational facilities.</p>
                        <div className="housing-features">
                            <span className="feature-tag">Co-ed</span>
                            <span className="feature-tag">En-suite</span>
                            <span className="feature-tag">Premium</span>
                        </div>
                    </div>

                    <div className="housing-card">
                        <div className="housing-icon">
                            <Home className="icon" />
                        </div>
                        <h3>478/479</h3>
                        <p>Traditional residence halls offering comfortable double occupancy rooms with shared facilities. Ideal for students seeking a classic campus living experience.</p>
                        <div className="housing-features">
                            <span className="feature-tag">Double Rooms</span>
                            <span className="feature-tag">Shared Facilities</span>
                        </div>
                    </div>

                    <div className="housing-card">
                        <div className="housing-icon">
                            <Bed className="icon" />
                        </div>
                        <h3>474/476</h3>
                        <p>Newly renovated blocks featuring updated interiors, improved ventilation, and enhanced security. Perfect for students who value modern comfort.</p>
                        <div className="housing-features">
                            <span className="feature-tag">Renovated</span>
                            <span className="feature-tag">Modern</span>
                        </div>
                    </div>

                    <div className="housing-card">
                        <div className="housing-icon">
                            <Users className="icon" />
                        </div>
                        <h3>Barracks</h3>
                        <p>Budget-friendly accommodation with essential amenities. Features communal spaces that foster a strong sense of community among residents.</p>
                        <div className="housing-features">
                            <span className="feature-tag">Affordable</span>
                            <span className="feature-tag">Community Living</span>
                        </div>
                    </div>

                    <div className="housing-card">
                        <div className="housing-icon">
                            <Shield className="icon" />
                        </div>
                        <h3>Single Rooms</h3>
                        <p>Private accommodation for students who prefer their own space. Includes personal study area and storage, perfect for postgraduate students.</p>
                        <div className="housing-features">
                            <span className="feature-tag">Private</span>
                            <span className="feature-tag">Quiet</span>
                            <span className="feature-tag">Postgrad</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="cta-section">
                <h2> Ready to Apply?</h2>
                <p>Join hundreds of students who call Bonno home.</p>

                <button className="btn-primary" onClick={onNavigateToAuth}>
                    <LogIn className="btn-icon" /> Get Started Now
                </button>
            </section>
            <footer className="footer">
                <div className="footer-grid">
                    <div>
                        <div className="footer-brand">
                            <Home className="footer-icon" />
                            <span>Bonno</span>
                        </div>
                        <p>University of Botswana's premier student housing system.</p>
                    </div>

                    <div>
                        <h4>Quick Links</h4>
                        <ul>
                            <li><button onClick={onNavigateToAuth}>Student Portal</button></li>
                            <li><button onClick={onNavigateToAuth}>Visitor Pass</button></li>
                            <li><button onClick={() => window.open("https://inrent.site")}>Off-Campus Housing</button></li>
                        </ul>
                    </div>

                    <div>
                        <h4>Contact</h4>
                        <ul>
                            <li>Email: housing@bonno.ub.bw</li>
                            <li>Phone: </li>

                        </ul>
                    </div>
                </div>
                <p className="footer-bottom">@ 2025 Bonno - All rights reserved.</p>
            </footer>

        </div>
    )
}
