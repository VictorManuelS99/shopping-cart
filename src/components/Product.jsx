import { useEffect, useState } from "react";
import { Separator } from "./Separator";

export const Product = ({ product, deleteProduct, products, setProducts }) => {
  const { id, image, name, amount, price } = product;
  const [amountProduct, setAmountProduct] = useState(amount);
  const [priceProduct, setPriceProduct] = useState(price * amount);

  useEffect(() => {
    setPriceProduct((price * amountProduct).toFixed(2));
  }, [price, amountProduct]);

  const plusAmount = () => {
    setAmountProduct(amountProduct + 1);
  };

  const lessAmount = () => {
    if (amountProduct > 0) setAmountProduct(amountProduct - 1);
  };

  return (
    <>
      <div className="product">
        <img src={image} alt={name + " image"} className="product_img" />
        <div className="product_data">
          <p className="product_data_name">{name}</p>
          <div className="product_data_amount">
            <p>Cantidad</p>
            <div className="product_data_amount_btns">
              <button
                onClick={() => {
                  lessAmount();
                }}
              >
                -
              </button>
              <p>{amountProduct}</p>
              <button
                onClick={() => {
                  plusAmount();
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="product_data_right ">
          <p className="product_data_price">S/.{priceProduct}</p>
          <button
            className="product_delete_btn"
            onClick={() => {
              deleteProduct(id);
            }}
          >
            <img src="vector/trash.png" alt="X" />
            <p>Quitar producto</p>
          </button>
        </div>
      </div>
      <Separator />
    </>
  );
};
