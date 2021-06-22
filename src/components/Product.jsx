import { Separator } from "./Separator";

export const Product = ({ product, deleteProduct, addAmount, rmAmount }) => {
  const { id, image, name, amount, price } = product;
  const priceUpd = amount * price;

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
                  rmAmount(id);
                }}
              >
                -
              </button>
              <p>{amount}</p>
              <button
                onClick={() => {
                  addAmount(id);
                }}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="product_data_right ">
          <p className="product_data_price">
            S/.<span id="price">{priceUpd.toFixed(2)}</span>
          </p>
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
