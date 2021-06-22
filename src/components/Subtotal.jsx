export const Subtotal = ({ subtotal }) => {
  return (
    <div className="product_bottom">
      <p>Subtotal:</p> <p>S/.{subtotal ? subtotal.toFixed(2) : 0}</p>
    </div>
  );
};
