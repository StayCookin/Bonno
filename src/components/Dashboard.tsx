import { Building2, Home, Users } from 'lucide-react';

interface DashboardProps {
  onNavigate: (page: string) => void;
}

export function Dashboard({ onNavigate }: DashboardProps) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome!</h1>
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
            <button 
              onClick={() => window.open('https://inrent.vercel.app', '_blank')}
              className="w-full bg-white border border-gray-200 text-gray-900 hover:bg-gray-50 font-semibold py-3 rounded-lg transition-colors"
            >
              Browse Off-Campus
            </button>
          </div>
        </div>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
        <h3 className="font-bold text-lg text-gray-900 mb-2">Need Help Deciding?</h3>
        <p className="text-gray-600">
          Our housing advisors are available to help you choose the best option for your needs. Contact us at <span className="text-[#8B1E3F] font-medium">housing@bonno.ub.bw</span> or call <span className="text-[#8B1E3F] font-medium">[Contact phone pending]</span>.
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
        <button 
          onClick={() => onNavigate('guest')}
          className="whitespace-nowrap flex items-center gap-2 px-6 py-3 bg-white border border-[#F5D0DB] text-[#8B1E3F] font-semibold rounded-lg hover:bg-[#FFF5F8] transition-colors"
        >
          <Users className="h-4 w-4" />
          Get Visitor Pass
        </button>
      </div>
    </div>
  );
}
