import { Building2, Home } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { UserPlus } from 'lucide-react';

interface AccommodationDashboardProps {
  user: {
    name: string;
    studentId: string;
  };
  onNavigate: (view: 'on-campus' | 'off-campus' | 'guest-portal') => void;
}

export function AccommodationDashboard({ user, onNavigate }: AccommodationDashboardProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl mb-4">Welcome, {user.name.split(' ')[0]}!</h1>
            <p className="text-gray-600">
              Choose your preferred accommodation option to get started
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* On-Campus Card */}
            <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="aspect-[4/3] relative overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1614715661635-abb0547c125c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkb3JtJTIwcm9vbXxlbnwxfHx8fDE3NjI2MjQwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="On-campus accommodation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 right-4 bg-[#800020] text-white px-3 py-1 rounded-full text-sm">
                  Popular
                </div>
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-[#800020]/10 rounded-lg">
                    <Building2 className="w-6 h-6 text-[#800020]" />
                  </div>
                  <CardTitle>Bonno On-Campus Housing</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Live in university-managed residences with easy access to classes, 
                  libraries, and campus facilities.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020]" />
                    <span className="text-sm text-gray-700">Walking distance to campus</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020]" />
                    <span className="text-sm text-gray-700">Shared accommodation options</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020]" />
                    <span className="text-sm text-gray-700">24/7 security & support</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#800020]" />
                    <span className="text-sm text-gray-700">Community events & activities</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-4" 
                  size="lg"
                  onClick={() => onNavigate('on-campus')}
                >
                  Apply for Bonno Housing
                </Button>
              </CardContent>
            </Card>

            {/* Off-Campus Card */}
            <Card className="overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="aspect-[4/3] relative overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYXBhcnRtZW50fGVufDF8fHx8MTc2MjY3OTM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Off-campus accommodation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-black/10 rounded-lg">
                    <Home className="w-6 h-6 text-black" />
                  </div>
                  <CardTitle>Off-Campus Housing</CardTitle>
                </div>
                <CardDescription className="text-base">
                  Explore private apartments and shared houses in the surrounding 
                  neighborhoods with more independence.
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-black" />
                    <span className="text-sm text-gray-700">More privacy & independence</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-black" />
                    <span className="text-sm text-gray-700">Variety of locations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-black" />
                    <span className="text-sm text-gray-700">Flexible lease terms</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-black" />
                    <span className="text-sm text-gray-700">Pet-friendly options</span>
                  </div>
                </div>
                
                <Button 
                  className="w-full mt-4" 
                  variant="outline"
                  size="lg"
                  onClick={() => window.open('https://inrent.vercel.app', '_blank')}
                >
                  Browse Off-Campus
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 p-6 bg-white rounded-lg shadow-sm border">
            <h3 className="mb-2">Need Help Deciding?</h3>
            <p className="text-gray-600 text-sm mb-4">
              Our housing advisors are available to help you choose the best option for your needs. 
              Contact us at housing@bonno.ub.bw or call +267 123-4567.
            </p>
          </div>

          {/* Guest Portal Section */}
          <div className="mt-6 p-6 bg-gradient-to-r from-[#800020]/10 to-[#800020]/5 rounded-lg border-2 border-[#800020]/20">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#800020]/10 rounded-lg">
                <UserPlus className="w-8 h-8 text-[#800020]" />
              </div>
              <div className="flex-1">
                <h3 className="mb-2">Visitor Pass Portal</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Are you a visitor? Get a digital pass to visit residents in Bonno housing facilities.
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => onNavigate('guest-portal')}
                  className="border-[#800020] text-[#800020] hover:bg-[#800020] hover:text-white"
                >
                  <UserPlus className="w-4 h-4 mr-2" />
                  Get Visitor Pass
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
