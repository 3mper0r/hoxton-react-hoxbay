import Product from "./product"
function Product_List({ products }) {
    if (products.length === 0) return <p>No Products Found</p>

    return (
        <ul className="products-container__list">
            {products.map(product => (
                <Product key={product.id} product={product} />
            ))}
        </ul>
    )
}

export default Product_List