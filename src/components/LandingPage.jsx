import { Building2, Shield } from 'lucide-react';
import React from 'react';
import { UserPlus, LogIn, Users, Bed, Home } from 'lucide-react';
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
                    <p>Round-the-clock security personnel and surveillance.</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon bg-theme"><Building2/></div>
                    <h3>Prime Location</h3>
                    <p>Walking distance from lecture halls and sports facilities.</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon bg-theme"><Bed/></div>
                    <h3>Furnished Rooms</h3>
                    <p>Bed, mattress, study desk, chair, and closet included</p>
                </div>

                <div className="feature-card">
                    <div className="feature-icon bg-theme"><Users/></div>
                    <h3>Community</h3>
                    <p>Join a vibrant student community with events and study groups.</p>
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