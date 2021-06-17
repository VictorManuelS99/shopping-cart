import { useEffect, useState } from "react";
import { getProducts } from "../services/ShoppingCartService";
import { Product } from "./Product";
import { Separator } from "./Separator";
import { Spinner } from "./Spinner";

export const ShoppingCart = () => {
  const [products, setProducts] = useState([]);
  const [costs, setCosts] = useState(0);

  useEffect(() => {
    fetchProducts();
    console.log(costs);
  }, []);

  const fetchProducts = async () => {
    const prods = await getProducts();
    setProducts(prods);
    console.log("fetcssssshsss");
    updCosts();
  };

  const updCosts = () => {
    setCosts(
      [...products].filter((p) => {
        const { id, price } = p;
        return { id, price };
      })
    );
  };

  const deleteProduct = (id) => {
    setProducts([...products].filter((product) => product.id !== id));
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
              costs={costs}
              setCosts={setCosts}
            />
          );
        })
      ) : (
        <Spinner />
      )}
    </div>
  );
};
