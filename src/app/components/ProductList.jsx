import React from "react";
import carte from "../cartelera";

export const ProductList = ({
    allProducts,
    setAllProducts,
    countProducts,
    setCountProducts,
    total,
    setTotal,
}) => {
    const onAddProduct = product => {
        if (allProducts.find(item => item.id === product.id)) {
            const products = allProducts.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setTotal(total + product.precio * product.quantity);
            setCountProducts(countProducts + product.quantity);
            return setAllProducts([...products]);
        }
        setTotal(total + product.precio * product.quantity);
        setCountProducts(countProducts + product.quantity);
        setAllProducts([...allProducts, product]);
    };
    return (
        <div className="container-items">
            {carte.map(product => (
                <div className="info.product">
                    <h2 className="titulo-producto">{product.pelicula}</h2>
                    <p className="precio">${product.precio}</p>
                    <button  onClick={() => onAddProduct(product)}>Añadir al carrito</button>
                </div>
            ))}
        </div>
    );
};