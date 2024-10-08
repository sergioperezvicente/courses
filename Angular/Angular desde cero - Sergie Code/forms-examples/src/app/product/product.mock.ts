export const productList: Product[] = [
    {id: 1, name: 'Nitrato', price: 10, description: 'Saco 25kg'},
    {id: 2, name: 'Sulfato', price: 20, description: 'Saco 25kg'},
    {id: 3, name: 'Fosfato', price: 35, description: 'Saco 25kg'},
    {id: 4, name: 'Nitrógeno', price: 22, description: 'Saco 25kg'},
    {id: 5, name: 'Calcio', price: 15, description: 'Saco 25kg'},
    {id: 6, name: 'Tiazosac', price: 100, description: 'Botella 1L'},
    {id: 7, name: 'Fengib', price: 130, description: 'Garrafa 5L'},
    {id: 8, name: 'Calibra', price: 180, description: 'Garrafa 5L'},
    {id: 9, name: 'Tepeki', price: 95},
]

export interface Product {
    id: number | string;
    name: string;
    price: number;
    description?: string;
}