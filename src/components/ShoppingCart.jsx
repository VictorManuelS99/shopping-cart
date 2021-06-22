import { useEffect, useState } from "react";
import { getProducts } from "../services/ShoppingCartService";
import { Product } from "./Product";
import { Separator } from "./Separator";
import { Spinner } from "./Spinner";
import { Subtotal } from "./Subtotal";
import { Envio } from "./Envio";
import { Total } from "./Total";
import { BtnPagar } from "./BtnPagar";

export const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const envioCost = 40;
  const subtotal =
    products.length > 0 && products.reduce((a, c) => a + c.price * c.amount, 0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const addAmount = (id) => {
    setProducts(
      products.map((p) => {
        if (p.id === id) return { ...p, amount: (p.amount += 1) };
        return p;
      })
    );
  };

  const rmAmount = (id) => {
    setProducts(
      products.map((p) => {
        if (p.id === id && p.amount > 0)
          return { ...p, amount: (p.amount -= 1) };
        return p;
      })
    );
  };

  const cleanShoppingCart = () => {
    setProducts([]);
  };

  return (
    <div className="cart">
      <h1 className="cart_title">Carrito de compras</h1>
      <Separator />
      {products.length > 0 ? (
        products.map((product, index) => {
          return (
            <Product
              product={product}
              key={`${index}-product-${product.id}`}
              deleteProduct={deleteProduct}
              addAmount={addAmount}
              rmAmount={rmAmount}
            />
          );
        })
      ) : (
        <Spinner />
      )}
      {<Subtotal subtotal={subtotal} />}
      <Envio envioCost={envioCost} />
      <Separator />
      <Total subtotal={subtotal} envioCost={envioCost} />
      <BtnPagar />
      <button onClick={cleanShoppingCart} className="product_clean_btn">
        Limpiar carrito
      </button>
    </div>
  );
};
