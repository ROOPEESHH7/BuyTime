export interface Product {
    id: string;
    name: string;
    slug: string;
    description: string;
  
    price: number;
    originalPrice?: number;
  
    category: string;
    brand: string;
  
    image: string;
  
    rating: number;
    reviews: number;
  
    stock: number;
  
    featured?: boolean;
    new?: boolean;
    sale?: boolean;
  }