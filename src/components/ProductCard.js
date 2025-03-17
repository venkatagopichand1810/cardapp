
function ProductCard({product}) {
    return (
        <div className="product-card">
            <img src={product.image} />
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <small>{product.description}</small>
        </div>
    )

}

export default ProductCard