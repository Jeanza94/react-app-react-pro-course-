import { Product } from "../interfaces/interfaces"

const product1 = {
    id: '1',
    title: 'coffee-mug - card',
    img: './coffee-mug.png'
}

const product2 = {
    id: '2',
    title: 'coffee-mug - meme',
    img: './coffee-mug2.png'
}

export const products: Product[] = [product1, product2]
