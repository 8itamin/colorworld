export interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  ageRange: string;
  category: 'Educational' | 'Fantasy' | 'Animals' | 'Activity';
  isNew?: boolean;
}

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}