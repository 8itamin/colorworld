export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  category: 'animals' | 'fantasy' | 'vehicles' | 'educational' | 'seasonal';
  imageUrl: string;
  rating: number;
  reviewsCount: number;
  isDigital: boolean;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface GeneratedImage {
  url: string;
  prompt: string;
}
