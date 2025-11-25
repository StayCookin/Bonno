import React from 'react';


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
                        <Home className="hero-icon" />
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
                            <Login className="btn-icon"/> Login / Sign Up
                        </button>

                        <button className="btn-outline" onClick={onNavigateToGuestPortal}>
                            <UserPlus className="btn-icon"/> Visitor Portal
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}