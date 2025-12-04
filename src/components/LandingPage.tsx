import { Building2, Shield } from 'lucide-react';
import React from 'react';
import { UserPlus, LogIn, Users, Bed, Home, Wifi, BookOpen, Heart } from 'lucide-react';
import UBotswana from '../assets/UBotswana.png';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

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
                        <Button 
                            size="lg" 
                            onClick={onNavigateToAuth}
                            className="bg-white text-[#800020] hover:bg-gray-100 px-8 py-6 text-lg font-semibold"
                        >
                            <LogIn className="w-5 h-5 mr-2" />
                            Student Login / Sign Up
                        </Button>

                        <Button 
                            size="lg" 
                            variant="outline"
                            onClick={onNavigateToGuestPortal}
                            className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold bg-transparent"
                        >
                            <UserPlus className="w-5 h-5 mr-2" />
                            Visitor Pass Portal
                        </Button>
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
                    <Card className="feature-card border-2 border-gray-100 hover:border-[#800020]/30 transition-all hover:shadow-lg">
                        <CardHeader>
                            <div className="feature-icon bg-theme">
                                <Shield className="w-6 h-6" />
                            </div>
                            <CardTitle>24/7 Security</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Round-the-clock security personnel ensuring your safety at all times with CCTV surveillance and controlled access.</p>
                        </CardContent>
                    </Card>

                    <Card className="feature-card border-2 border-gray-100 hover:border-[#800020]/30 transition-all hover:shadow-lg">
                        <CardHeader>
                            <div className="feature-icon bg-theme">
                                <Wifi className="w-6 h-6" />
                            </div>
                            <CardTitle>High-Speed Internet</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Reliable fiber-optic internet connectivity throughout the campus for seamless studying and entertainment.</p>
                        </CardContent>
                    </Card>

                    <Card className="feature-card border-2 border-gray-100 hover:border-[#800020]/30 transition-all hover:shadow-lg">
                        <CardHeader>
                            <div className="feature-icon bg-theme">
                                <BookOpen className="w-6 h-6" />
                            </div>
                            <CardTitle>Study Spaces</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Dedicated quiet study areas and group discussion rooms equipped with whiteboards and comfortable seating.</p>
                        </CardContent>
                    </Card>

                    <Card className="feature-card border-2 border-gray-100 hover:border-[#800020]/30 transition-all hover:shadow-lg">
                        <CardHeader>
                            <div className="feature-icon bg-theme">
                                <Heart className="w-6 h-6" />
                            </div>
                            <CardTitle>Wellness Support</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>On-site health services, counseling support, and recreational facilities for your physical and mental wellbeing.</p>
                        </CardContent>
                    </Card>
                </div>
                
                <div className="features-grid" style={{marginTop: '2rem'}}>
                    <Card className="feature-card border-2 border-gray-100 hover:border-[#800020]/30 transition-all hover:shadow-lg">
                        <CardHeader>
                            <div className="feature-icon bg-theme">
                                <Building2 className="w-6 h-6" />
                            </div>
                            <CardTitle>Prime Location</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Walking distance from lecture halls, library, dining halls, and sports facilities.</p>
                        </CardContent>
                    </Card>

                    <Card className="feature-card border-2 border-gray-100 hover:border-[#800020]/30 transition-all hover:shadow-lg">
                        <CardHeader>
                            <div className="feature-icon bg-theme">
                                <Bed className="w-6 h-6" />
                            </div>
                            <CardTitle>Furnished Rooms</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Fully furnished with bed, mattress, study desk, chair, wardrobe, and essential amenities.</p>
                        </CardContent>
                    </Card>

                    <Card className="feature-card border-2 border-gray-100 hover:border-[#800020]/30 transition-all hover:shadow-lg">
                        <CardHeader>
                            <div className="feature-icon bg-theme">
                                <Users className="w-6 h-6" />
                            </div>
                            <CardTitle>Vibrant Community</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Join a diverse student community with regular events, study groups, and cultural activities.</p>
                        </CardContent>
                    </Card>

                    <Card className="feature-card border-2 border-gray-100 hover:border-[#800020]/30 transition-all hover:shadow-lg">
                        <CardHeader>
                            <div className="feature-icon bg-theme">
                                <Home className="w-6 h-6" />
                            </div>
                            <CardTitle>Modern Facilities</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>Laundry services, common kitchens, TV lounges, and emergency maintenance support available.</p>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="housing-options-section">
                <div className="section-header">
                    <h2 className="section-title">Our Housing Options</h2>
                    <p className="section-sub">Choose from a variety of accommodation types to suit your needs and preferences</p>
                </div>

                <div className="housing-grid">
                    <Card className="housing-card hover:shadow-xl transition-all">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold">Las Vegas</CardTitle>
                            <CardDescription>Next to outdoor sports arena</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">Premium student accommodation with modern amenities and spacious rooms.</p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020]" />
                                    Shared rooms (2 people)
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020]" />
                                    En-suite bathrooms
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020]" />
                                    Premium facilities
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="housing-card hover:shadow-xl transition-all border-2 border-[#800020]/20">
                        <CardHeader>
                            <div className="flex items-center gap-2">
                                <CardTitle className="text-xl font-bold">478/479</CardTitle>
                                <Wifi className="w-4 h-4 text-[#800020]" />
                            </div>
                            <CardDescription>Near Nanogang - WiFi Available</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">Traditional residence halls offering comfortable double occupancy rooms with shared facilities.</p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020]" />
                                    Double rooms
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020]" />
                                    4mbps WiFi included
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020]" />
                                    Shared facilities
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="housing-card hover:shadow-xl transition-all">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold">474/476</CardTitle>
                            <CardDescription>Near UB Clinic</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">Newly renovated blocks featuring updated interiors, improved ventilation, and enhanced security.</p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020]" />
                                    Renovated rooms
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020]" />
                                    Near medical facilities
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020]" />
                                    Modern amenities
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="housing-card hover:shadow-xl transition-all">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold">Barracks</CardTitle>
                            <CardDescription>Traditional housing</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">Budget-friendly accommodation with essential amenities and strong community atmosphere.</p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020]" />
                                    Shared rooms
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020]" />
                                    Affordable rates
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020]" />
                                    Community living
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    <Card className="housing-card hover:shadow-xl transition-all border-2 border-[#800020]/20">
                        <CardHeader>
                            <CardTitle className="text-xl font-bold">Single Rooms</CardTitle>
                            <CardDescription>Private accommodation</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className="mb-4">Private accommodation for students who prefer their own space. Perfect for postgraduate students.</p>
                            <ul className="space-y-2 text-sm">
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020]" />
                                    Private room
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020]" />
                                    Personal study space
                                </li>
                                <li className="flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020]" />
                                    Quiet environment
                                </li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </section>

            <section className="cta-section">
                <h2> Ready to Apply?</h2>
                <p>Join hundreds of students who call Bonno home.</p>

                <Button 
                    size="lg" 
                    onClick={onNavigateToAuth}
                    className="bg-white text-[#800020] hover:bg-gray-100 px-8 py-6 text-lg font-bold"
                >
                    <LogIn className="w-5 h-5 mr-2" />
                    Get Started Now
                </Button>
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
                            <li>Phone: +267 123-4567</li>
                            <li>Location: University of Botswana</li>
                        </ul>
                    </div>
                </div>
                <p className="footer-bottom">@ 2025 Bonno - All rights reserved.</p>
            </footer>
        </div>
    )
}
