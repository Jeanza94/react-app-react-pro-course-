import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import '../styles/custom-styles.css'


export const ShoppingPage = () => {

    const { shoppingCart, onProductCountChange } = useShoppingCart()

    return (
        <div>
            <h1>Shopping store</h1>
            <hr />

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>

                {
                    products.map(product => (
                        <ProductCard
                            product={product}
                            className="bg-dark"
                            key={product.id}
                            onChange={onProductCountChange}
                            value={shoppingCart[product.id]?.count || 0}

                        >
                            <ProductImage
                                className="custom-image"
                            />
                            <ProductTitle
                                title="adasda"
                                className="text-white"
                            />
                            <ProductButtons
                                className="custom-buttons" />
                        </ProductCard>
                    ))
                }
            </div>

            <div className="shopping-cart">

                {
                    Object.entries(shoppingCart).map(([key, product]) => {
                        return (
                            <ProductCard
                                product={product}
                                className="bg-dark"
                                style={{ width: '100px' }}
                                key={key}
                                value={product.count}
                                onChange={onProductCountChange}
                            >
                                <ProductImage
                                    className="custom-image"
                                />

                                <ProductButtons
                                    className="custom-buttons"
                                    style={{ display: 'flex', justifyContent: 'center' }}
                                />
                            </ProductCard>
                        )
                    })
                }


            </div>

        </div>
    )
}
