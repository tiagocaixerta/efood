export interface Product {
    id: number;
    name: string;
    price: string;
  }
  
  export interface Restaurant {
    id: number;
    name: string;
    description: string;
    cardapio: Product[];
  }
  