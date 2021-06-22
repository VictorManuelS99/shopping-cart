export const Total = ({ subtotal, envioCost }) => {
  const total = subtotal + envioCost;

  return (
    <div className="product_bottom">
      <p>Total:</p>
      <p>S/.{total.toFixed(2)}</p>{" "}
    </div>
  );
};
