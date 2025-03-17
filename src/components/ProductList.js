
import { useState, useEffect } from "react";
import productsData from "../data/products";
import ProductCard from "./ProductCard";


function ProductList() {
    // state to store the product list
    const[products, setProducts] = useState([]);

    // useEffect to load the products 
    useEffect(() => {
        setProducts(productsData);
    }, []);

    return (
        <div className="product-list">
            <h1>Products</h1>
            <div className="product-grid">
                {products.map((product) => (
                    
                    <ProductCard key={product.id} product = {product} />

                ))}
            </div>
        </div>
    )

}

export default ProductList