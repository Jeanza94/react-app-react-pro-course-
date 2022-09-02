import { ProductButtons } from "./ProductButtons";
import { ProductCard as ProductCardHOC } from "./ProductCard";
import { ProductCardPropsHOCProps } from "../interfaces/interfaces";
import { ProductImage } from "./ProductImage";
import { ProductTitle } from "./ProductTitle";




export { ProductButtons } from "./ProductButtons";
export { ProductImage } from "./ProductImage";
// export { ProductCard } from './ProductCard';
export { ProductTitle } from "./ProductTitle";

export const ProductCard: ProductCardPropsHOCProps = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Buttons: ProductButtons
})




export default ProductCard;