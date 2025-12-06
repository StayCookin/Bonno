import { useState } from 'react';
import { ArrowLeft, Filter, Search } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { AccommodationCard } from './AccommodationCard';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog';
import { Label } from './ui/label';
import { toast } from 'sonner';
import { accommodationOptions } from '../data/accommodationData';

interface OffCampusListingsProps {
  onBack: () => void;
}

const mockListings: AccommodationOption[] = [
  {
    id: '1',
    title: 'Modern Studio Apartment',
    description: 'Cozy studio with kitchenette and private bathroom',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYXBhcnRtZW50fGVufDF8fHx8MTc2MjY3OTM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 750,
    bedrooms: 1,
    capacity: 1,
    location: '0.5 miles from campus',
    available: true,
    type: 'studio'
  },
  {
    id: '2',
    title: 'Shared House - 4 Bedrooms',
    description: 'Spacious shared house with common areas and backyard',
    image: 'https://images.unsplash.com/photo-1627889587269-1ec7c8b29049?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGFyZWQlMjBzdHVkZW50JTIwaG91c2luZ3xlbnwxfHx8fDE3NjI2MTYxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 450,
    bedrooms: 1,
    capacity: 4,
    location: '1 mile from campus',
    available: true,
    type: 'shared'
  },
  {
    id: '3',
    title: 'Private 1-Bedroom Apartment',
    description: 'Fully furnished with modern amenities and parking',
    image: 'https://images.unsplash.com/photo-1703782498522-f9c2b9c1bc25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbXxlbnwxfHx8fDE3NjI2NzQwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 950,
    bedrooms: 1,
    capacity: 1,
    location: '0.8 miles from campus',
    available: true,
    type: 'private'
  },
  {
    id: '4',
    title: 'Student Co-living Space',
    description: 'Private bedroom in shared apartment with 3 other students',
    image: 'https://images.unsplash.com/photo-1614715661635-abb0547c125c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkb3JtJTIwcm9vbXxlbnwxfHx8fDE3NjI2MjQwNzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 550,
    bedrooms: 1,
    capacity: 4,
    location: '0.3 miles from campus',
    available: true,
    type: 'shared'
  },
  {
    id: '5',
    title: 'Luxury Studio Downtown',
    description: 'Premium studio with gym access and rooftop terrace',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50JTIwYXBhcnRtZW50fGVufDF8fHx8MTc2MjY3OTM0OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 1200,
    bedrooms: 1,
    capacity: 1,
    location: '1.5 miles from campus',
    available: false,
    type: 'studio'
  },
  {
    id: '6',
    title: 'Budget Friendly Room',
    description: 'Affordable private room in quiet neighborhood',
    image: 'https://images.unsplash.com/photo-1703782498522-f9c2b9c1bc25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYmVkcm9vbXxlbnwxfHx8fDE3NjI2NzQwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    price: 400,
    bedrooms: 1,
    capacity: 2,
    location: '2 miles from campus',
    available: true,
    type: 'shared'
  }
];

export function OffCampusListings({ onBack }: OffCampusListingsProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [priceFilter, setPriceFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');
  const [selectedListing, setSelectedListing] = useState<AccommodationOption | null>(null);
  const [showContactDialog, setShowContactDialog] = useState(false);

  // Filter listings
  const filteredListings = mockListings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         listing.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesPrice = priceFilter === 'all' ||
                        (priceFilter === 'low' && listing.price <= 500) ||
                        (priceFilter === 'mid' && listing.price > 500 && listing.price <= 800) ||
                        (priceFilter === 'high' && listing.price > 800);
    
    const matchesType = typeFilter === 'all' || listing.type === typeFilter;
    
    return matchesSearch && matchesPrice && matchesType;
  });

  const handleSelectListing = (id: string) => {
    const listing = mockListings.find(l => l.id === id);
    if (listing) {
      setSelectedListing(listing);
      setShowContactDialog(true);
    }
  };

  const handleContactLandlord = () => {
    toast.success('Contact request sent! The landlord will reach out to you via email.');
    setShowContactDialog(false);
    setSelectedListing(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <Button
            variant="ghost"
            onClick={onBack}
            className="mb-6"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Dashboard
          </Button>

          <div className="mb-8">
            <h1 className="mb-2">Off-Campus Housing</h1>
            <p className="text-gray-600">
              Browse available off-campus accommodation options near the university
            </p>
          </div>

          {/* Filters */}
          <div className="mb-6 bg-white p-4 rounded-lg shadow-sm border">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-gray-600" />
              <h3>Filters</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search listings..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={priceFilter} onValueChange={setPriceFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Price Range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="low">Under $500</SelectItem>
                  <SelectItem value="mid">$500 - $800</SelectItem>
                  <SelectItem value="high">Over $800</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={typeFilter} onValueChange={setTypeFilter}>
                <SelectTrigger>
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="studio">Studio</SelectItem>
                  <SelectItem value="private">Private</SelectItem>
                  <SelectItem value="shared">Shared</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Listings Grid */}
          {filteredListings.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500">No listings match your search criteria</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredListings.map(listing => (
                <AccommodationCard
                  key={listing.id}
                  accommodation={listing}
                  onSelect={handleSelectListing}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Contact Dialog */}
      <Dialog open={showContactDialog} onOpenChange={setShowContactDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contact Landlord</DialogTitle>
            <DialogDescription>
              Express your interest in {selectedListing?.title}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4 py-4">
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm">
                <strong>{selectedListing?.title}</strong>
              </p>
              <p className="text-sm text-gray-600">{selectedListing?.location}</p>
              <p className="text-sm">
                <strong className="text-blue-600">${selectedListing?.price}/month</strong>
              </p>
            </div>
            
            <div className="space-y-2">
              <Label>Your Message</Label>
              <p className="text-sm text-gray-600">
                A standard inquiry message will be sent to the landlord along with your contact information.
                They will reach out to you directly to arrange a viewing.
              </p>
            </div>
          </div>
          
          <DialogFooter>
            <Button variant="outline" onClick={() => setShowContactDialog(false)}>
              Cancel
            </Button>
            <Button onClick={handleContactLandlord}>
              Send Contact Request
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
