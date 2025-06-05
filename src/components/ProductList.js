import dataFetching from "../service/productData";

const ProductList = async () => {
    const products = await dataFetching();
    return (
        <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
                <div key={product.id} className="product-item">
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <p>Price: ${product.price}</p>
                </div>
            ))}
        </div>
    );
}