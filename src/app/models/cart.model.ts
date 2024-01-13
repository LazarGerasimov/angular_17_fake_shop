export interface CartInterface {
    items: Array<CartItemInterface>;

}

export interface CartItemInterface {
    product: string;
    name: string;
    price: number;
    quantity: number;
    id?: string | number;
}