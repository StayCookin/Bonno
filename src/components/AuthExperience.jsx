import { useState } from 'react';
import {
  Home,
  LogOut,
  User,
  Building2,
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  GraduationCap,
  List,
  Calendar,
  Users,
  Briefcase,
  HelpCircle
} from 'lucide-react';

const Header = ({ onLogout }) => (
  <header className="bg-white border-b border-gray-200 py-4 px-6 flex justify-between items-center sticky top-0 z-50">
    <div className="flex items-center gap-2">
      <Building2 className="text-[#8B1E3F] h-6 w-6" />
      <span className="text-xl font-bold text-[#8B1E3F]">Bonno</span>
    </div>
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-2 text-gray-600">
        <User className="h-5 w-5" />
        <span className="hidden sm:inline">John Doe</span>
      </div>
      <button
        onClick={onLogout}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 text-sm font-medium transition-colors"
      >
        <LogOut className="h-4 w-4" />
        Logout
      </button>
    </div>
  </header>
);

const Footer = () => (
  <footer className="bg-white border-t border-gray-200 py-8 px-6 mt-12">
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
      <div>
        <h3 className="font-bold text-[#8B1E3F] mb-4">Housing Options Showcase</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>Las Vegas (sports arena)</li>
          <li>478/479 (with WiFi badge)</li>
          <li>Barracks</li>
          <li>Single Rooms</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-[#8B1E3F] mb-4">Call-to-Action</h3>
        <p className="text-sm text-gray-600">Apply now to secure your spot for the upcoming semester.</p>
      </div>
      <div>
        <h3 className="font-bold text-[#8B1E3F] mb-4">Quick Links</h3>
        <ul className="space-y-2 text-sm text-gray-600">
          <li>Student Portal</li>
          <li>Visitor Pass</li>
          <li>Off-Campus Housing</li>
        </ul>
      </div>
      <div>
        <h3 className="font-bold text-[#8B1E3F] mb-4">Contact</h3>
        <p className="text-sm text-gray-600">housing@bonno.ub.bw</p>
        <p className="text-sm text-gray-600">+267 123-4567</p>
      </div>
    </div>
    <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-gray-100 text-center text-sm text-gray-500">
      © 2025 Bonno Student Accommodation. All rights reserved.
    </div>
  </footer>
);

const AuthScreen = ({ initialMode = 'login', onLogin, onBackHome, onModeChange }) => {
  const [mode, setMode] = useState(initialMode);

  const updateMode = (value) => {
    setMode(value);
    onModeChange?.(value);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="p-6">
        <button
          onClick={onBackHome}
          className="flex items-center gap-2 text-gray-600 font-medium hover:text-[#8B1E3F] transition-colors"
        >
          <ArrowLeft className="h-5 w-5" />
          Back to Home
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center px-4 pb-20">
        <div className="w-full max-w-md">
          <div className="bg-gray-200 p-1 rounded-full grid grid-cols-2 mb-8">
            <button
              onClick={() => updateMode('signup')}
              className={`py-2 text-sm font-medium rounded-full transition-all ${
                mode === 'signup'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Sign Up
            </button>
            <button
              onClick={() => updateMode('login')}
              className={`py-2 text-sm font-medium rounded-full transition-all ${
                mode === 'login'
                  ? 'bg-white text-gray-900 shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Login
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {mode === 'login' ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-gray-500 mb-6">
              {mode === 'login'
                ? 'Login to continue your accommodation application'
                : 'Sign up to start your accommodation application'}
            </p>

            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); onLogin(); }}>
              {mode === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8B1E3F] focus:border-transparent outline-none transition-all"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
                <input
                  type="text"
                  placeholder="STU123456"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8B1E3F] focus:border-transparent outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
                <input
                  type="password"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8B1E3F] focus:border-transparent outline-none transition-all"
                />
              </div>

              {mode === 'signup' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
                  <input
                    type="password"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8B1E3F] focus:border-transparent outline-none transition-all"
                  />
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#8B1E3F] hover:bg-[#6b1730] text-white font-semibold py-3 rounded-lg mt-6 transition-colors shadow-lg shadow-[#8B1E3F]/20"
              >
                {mode === 'login' ? 'Login' : 'Create Account'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

const Dashboard = ({ onNavigate }) => (
  <div className="max-w-6xl mx-auto px-6 py-12">
    <div className="text-center mb-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome, John!</h1>
      <p className="text-xl text-gray-600">Choose your preferred accommodation option to get started</p>
    </div>

    <div className="grid md:grid-cols-2 gap-8 mb-12">
      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
        <div className="h-64 bg-gray-200 relative">
          <img
            src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Dorm Room"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 right-4 bg-[#8B1E3F] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
            Popular
          </div>
        </div>
        <div className="p-8 flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-[#8B1E3F]/10 rounded-lg">
              <Building2 className="text-[#8B1E3F] h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Bonno On-Campus Housing</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Live in university-managed residences with easy access to classes, libraries, and campus facilities.
          </p>
          <ul className="space-y-3 mb-8 flex-1">
            {['Walking distance to campus', 'Shared accommodation options', '24/7 security & support', 'Community events & activities'].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#8B1E3F]" />
                {item}
              </li>
            ))}
          </ul>
          <button
            onClick={() => onNavigate('application')}
            className="w-full bg-[#8B1E3F] hover:bg-[#6b1730] text-white font-semibold py-3 rounded-lg transition-colors shadow-lg shadow-[#8B1E3F]/20"
          >
            Apply for Bonno Housing
          </button>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow flex flex-col">
        <div className="h-64 bg-gray-200 relative">
          <img
            src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
            alt="Apartment"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="p-8 flex-1 flex flex-col">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-gray-100 rounded-lg">
              <Home className="text-gray-700 h-6 w-6" />
            </div>
            <h2 className="text-xl font-bold text-gray-900">Off-Campus Housing</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Explore private apartments and shared houses in the surrounding neighborhoods with more independence.
          </p>
          <ul className="space-y-3 mb-8 flex-1">
            {['More privacy & independence', 'Variety of locations', 'Flexible lease terms', 'Pet-friendly options'].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gray-800" />
                {item}
              </li>
            ))}
          </ul>
          <button className="w-full bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 font-semibold py-3 rounded-lg transition-colors">
            Browse Off-Campus
          </button>
        </div>
      </div>
    </div>

    <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
      <h3 className="font-bold text-lg text-gray-900 mb-2">Need Help Deciding?</h3>
      <p className="text-gray-600">
        Our housing advisors are available to help you choose the best option for your needs. Contact us at <span className="text-[#8B1E3F] font-medium">housing@bonno.ub.bw</span> or call <span className="text-[#8B1E3F] font-medium">+267 123-4567</span>.
      </p>
    </div>

    <div className="bg-[#FDF2F4] border border-[#F5D0DB] rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-[#8B1E3F]/10 rounded-lg text-[#8B1E3F]">
          <Users className="h-6 w-6" />
        </div>
        <div>
          <h3 className="font-bold text-lg text-gray-900 mb-1">Visitor Pass Portal</h3>
          <p className="text-gray-600 text-sm">Are you a visitor? Get a digital pass to visit residents in Bonno housing facilities.</p>
        </div>
      </div>
      <button className="whitespace-nowrap flex items-center gap-2 px-6 py-3 bg-white border border-[#F5D0DB] text-[#8B1E3F] font-semibold rounded-lg hover:bg-[#FFF5F8] transition-colors">
        <Users className="h-4 w-4" />
        Get Visitor Pass
      </button>
    </div>
  </div>
);

const ApplicationForm = ({ onBack }) => {
  const [isOVC, setIsOVC] = useState(false);

  const steps = [
    { icon: User, label: 'Personal Info', active: true, completed: false },
    { icon: GraduationCap, label: 'Academic', active: false, completed: false },
    { icon: Home, label: 'Preferences', active: false, completed: false },
    { icon: List, label: 'Requirements', active: false, completed: false },
    { icon: CheckCircle, label: 'Review', active: false, completed: false }
  ];

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <button
        onClick={onBack}
        className="flex items-center gap-2 text-gray-600 font-medium hover:text-[#8B1E3F] transition-colors mb-8"
      >
        <ArrowLeft className="h-5 w-5" />
        Back to Dashboard
      </button>

      <div className="mb-12">
        <div className="flex justify-between relative">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-10 -translate-y-1/2 rounded-full" />
          <div className="absolute top-1/2 left-0 w-[10%] h-1 bg-[#8B1E3F] -z-10 -translate-y-1/2 rounded-full" />

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center gap-2 bg-white px-2">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                  step.active
                    ? 'border-[#8B1E3F] bg-[#8B1E3F] text-white'
                    : step.completed
                      ? 'border-[#8B1E3F] bg-white text-[#8B1E3F]'
                      : 'border-gray-200 bg-gray-50 text-gray-400'
                }`}
              >
                <step.icon className="h-5 w-5" />
              </div>
              <span className={`text-xs font-medium ${step.active ? 'text-gray-900' : 'text-gray-400'}`}>
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
        <div className="mb-8 border-b border-gray-100 pb-6">
          <h2 className="text-xl font-bold text-gray-900">Bonno On-Campus Housing Application</h2>
          <p className="text-gray-500">Step 1 of 5: Personal Info</p>
        </div>

        <div className="space-y-8">
          <section>
            <h3 className="font-semibold text-gray-900 mb-4">Personal Information</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                <input
                  type="text"
                  defaultValue="John Doe"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8B1E3F] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Student ID *</label>
                <input
                  type="text"
                  defaultValue="213213"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8B1E3F] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  defaultValue="71717171"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8B1E3F] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth *</label>
                <div className="relative">
                  <input
                    type="text"
                    defaultValue="16/06/2004"
                    className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8B1E3F] focus:border-transparent outline-none"
                  />
                  <Calendar className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
                </div>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Gender *</label>
                <select className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8B1E3F] focus:border-transparent outline-none appearance-none">
                  <option>Male</option>
                  <option>Female</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact Name *</label>
                <input
                  type="text"
                  defaultValue="Michelle"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8B1E3F] focus:border-transparent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Emergency Contact Phone *</label>
                <input
                  type="tel"
                  defaultValue="78123123"
                  className="w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8B1E3F] focus:border-transparent outline-none"
                />
              </div>
            </div>
          </section>

          <section className="bg-[#FFF5F7] border border[#FCE7EC] rounded-xl p-6">
            <label className="block font-medium text-gray-900 mb-4">Are you an Orphan or Vulnerable Child (OVC)? *</label>
            <div className="space-y-3 mb-6">
              <label className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg cursor-pointer hover:border-[#8B1E3F] transition-colors">
                <input
                  type="radio"
                  name="ovc"
                  checked={isOVC}
                  onChange={() => setIsOVC(true)}
                  className="w-4 h-4 text-[#8B1E3F] focus:ring-[#8B1E3F]"
                />
                <span className="text-gray-700">Yes, I am OVC</span>
              </label>
              <label className="flex items-center gap-3 p-3 bg-white border border-gray-200 rounded-lg cursor-pointer hover:border-[#8B1E3F] transition-colors">
                <input
                  type="radio"
                  name="ovc"
                  checked={!isOVC}
                  onChange={() => setIsOVC(false)}
                  className="w-4 h-4 text-[#8B1E3F] focus:ring-[#8B1E3F]"
                />
                <span className="text-gray-700">No, I am not OVC</span>
              </label>
            </div>

            {isOVC && (
              <div className="animate-in fade-in slide-in-from-top-4 duration-300">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="h-4 w-4 text-[#8B1E3F]" />
                  Parent/Guardian Information
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Full Name *</label>
                    <input
                      type="text"
                      placeholder="Gobotsamang"
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8B1E3F] focus:border-transparent outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Parent/Guardian Contact *</label>
                    <input
                      type="tel"
                      placeholder="768589804"
                      className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8B1E3F] focus-border-transparent outline-none"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Is your parent/guardian currently employed? *</label>
                    <div className="relative">
                      <select className="w-full px-4 py-2.5 bg-white border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#8B1E3F] focus:border-transparent outline-none appearance-none">
                        <option>Yes - Full-time employment</option>
                        <option>Yes - Part-time employment</option>
                        <option>No - Unemployed</option>
                      </select>
                      <Briefcase className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Can your parent/guardian provide financial assistance? *</label>
                    <div className="relative">
                      <select className="w-full px-4 py-2.5 bg-white border-2 border-[#8B1E3F]/30 rounded-lg focus:ring-2 focus:ring-[#8B1E3F] focus-border-transparent outline-none appearance-none">
                        <option>No - Unable to provide assistance</option>
                        <option>Yes - Full assistance</option>
                        <option>Yes - Partial assistance</option>
                      </select>
                      <HelpCircle className="absolute right-3 top-2.5 h-5 w-5 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          <div className="flex gap-4 pt-4 border-t border-gray-100">
            <button className="flex-1 py-3 px-6 border border-gray-200 rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition-colors">
              Cancel
            </button>
            <button className="flex-1 py-3 px-6 bg-[#8B1E3F] text-white rounded-lg font-semibold hover:bg-[#6b1730] transition-colors flex items-center justify-center gap-2 shadow-lg shadow-[#8B1E3F]/20">
              Next
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const AuthExperience = ({ onBackHome, initialMode = 'login', onModeChange }) => {
  const [view, setView] = useState('auth');

  const handleLogin = () => setView('dashboard');
  const handleLogout = () => setView('auth');
  const navigateToApplication = () => setView('application');
  const navigateToDashboard = () => setView('dashboard');

  if (view === 'auth') {
    return <AuthScreen initialMode={initialMode} onLogin={handleLogin} onBackHome={onBackHome} onModeChange={onModeChange} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans">
      <Header onLogout={handleLogout} />

      <main className="flex-grow">
        {view === 'dashboard' && <Dashboard onNavigate={navigateToApplication} />}
        {view === 'application' && <ApplicationForm onBack={navigateToDashboard} />}
      </main>

      <Footer />
    </div>
  );
};

export default AuthExperience;
