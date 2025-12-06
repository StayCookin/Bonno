import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { MapPin, Bed, Users, DollarSign } from 'lucide-react';

export interface AccommodationOption {
  id: string;
  title: string;
  description: string;
  image: string;
  price: number;
  bedrooms: number;
  capacity: number;
  location: string;
  available: boolean;
  type: 'shared' | 'private' | 'studio';
}

interface AccommodationCardProps {
  accommodation: AccommodationOption;
  onSelect?: (id: string) => void;
}

export function AccommodationCard({ accommodation, onSelect }: AccommodationCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-video relative overflow-hidden">
        <img
          src={accommodation.image}
          alt={accommodation.title}
          className="w-full h-full object-cover"
        />
        {!accommodation.available && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <Badge variant="secondary" className="bg-red-500 text-white">
              Not Available
            </Badge>
          </div>
        )}
      </div>
      
      <CardHeader>
        <div className="flex items-start justify-between gap-2">
          <div>
            <CardTitle>{accommodation.title}</CardTitle>
            <CardDescription className="mt-1">{accommodation.description}</CardDescription>
          </div>
          <Badge variant="outline" className="capitalize shrink-0">
            {accommodation.type}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{accommodation.location}</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 text-gray-600">
              <Bed className="w-4 h-4" />
              <span className="text-sm">{accommodation.bedrooms} bed</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Users className="w-4 h-4" />
              <span className="text-sm">{accommodation.capacity} person</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-blue-600 pt-2">
            <DollarSign className="w-5 h-5" />
            <span className="text-xl">{accommodation.price}</span>
            <span className="text-sm text-gray-500">/month</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter>
        <Button
          className="w-full"
          disabled={!accommodation.available}
          onClick={() => onSelect?.(accommodation.id)}
        >
          {accommodation.available ? 'Select' : 'Unavailable'}
        </Button>
      </CardFooter>
    </Card>
  );
}
