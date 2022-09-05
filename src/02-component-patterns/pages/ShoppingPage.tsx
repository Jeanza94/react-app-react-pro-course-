import { ProductButtons, ProductCard, ProductImage, ProductTitle } from "../components"
import { products } from "../data/products";
import '../styles/custom-styles.css'

const product = products[0];

export const ShoppingPage = () => {


    return (
        <div>
            <h1>Shopping store</h1>
            <hr />

            <ProductCard
                product={product}
                className="bg-dark"
                key={product.id}
                initialValues={{
                    count: 4,
                    maxCount: 10
                }}
            >

                {
                    ({ reset, count, increaseBy, isMaxCountReached, maxCount }) => (
                        <>
                            <ProductImage
                                className="custom-image"
                            />
                            <ProductTitle
                                title="adasda"
                                className="text-white"
                            />
                            <ProductButtons
                                className="custom-buttons" />

                            <button onClick={reset}>Reset</button>

                            {
                                (count > 0) && <button onClick={() => increaseBy(-2)}>-2</button>

                            }
                            {
                                (!isMaxCountReached) && <button onClick={() => increaseBy(+2)}>+2</button>

                            }
                            <span>{count}</span>

                        </>
                    )
                }

            </ProductCard>

        </div>
    )
}
