import library247 from '../assets/247.png';
import execImg from '../assets/Exec.png';
import crazyImg from '../assets/crazy.png';
import engineeringImg from '../assets/engineering.png';
import fetImg from '../assets/fet.png';
import libraryImg from '../assets/library.png';

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

export const accommodationOptions: AccommodationOption[] = [
  {
    id: '1',
    title: '247 Library Residence',
    description: 'Study space with 24/7 access, quiet environment perfect for serious students',
    image: library247,
    price: 450,
    bedrooms: 1,
    capacity: 1,
    location: 'Near Main Campus',
    available: true,
    type: 'studio'
  },
  {
    id: '2',
    title: 'Executive Apartments',
    description: 'Premium student accommodation with modern amenities',
    image: execImg,
    price: 800,
    bedrooms: 2,
    capacity: 2,
    location: 'Block 10',
    available: true,
    type: 'private'
  },
  {
    id: '3',
    title: 'Crazy Bear Residence',
    description: 'Vibrant community living with shared spaces and regular social events',
    image: crazyImg,
    price: 350,
    bedrooms: 1,
    capacity: 2,
    location: 'Near Sports Complex',
    available: false,
    type: 'shared'
  },
  {
    id: '4',
    title: 'Engineering Hub',
    description: 'Located close to engineering faculty, ideal for tech students',
    image: engineeringImg,
    price: 400,
    bedrooms: 1,
    capacity: 1,
    location: 'Engineering Quarter',
    available: true,
    type: 'studio'
  },
  {
    id: '5',
    title: 'FET Commons',
    description: 'Modern shared accommodation with study rooms and computer lab access',
    image: fetImg,
    price: 425,
    bedrooms: 2,
    capacity: 4,
    location: 'Faculty Row',
    available: true,
    type: 'shared'
  },
  {
    id: '6',
    title: 'Library View Studios',
    description: 'Quiet studios with beautiful library views, perfect for postgraduate students',
    image: libraryImg,
    price: 550,
    bedrooms: 1,
    capacity: 1,
    location: 'Library Precinct',
    available: true,
    type: 'studio'
  }
];
