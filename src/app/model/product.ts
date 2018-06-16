export interface LocalProduct{
    productId: number;
    productName: string;
    productCode?: string;
    releaseDate?: string;
    price?: number;
    description?: string;
    starRating?: number;
    imageUrl?: string;
}

export interface Product{
    id?: number;
    productId?: number;
    productName: string;
    productCode: number;
    price: number;
    rating?: number;
}