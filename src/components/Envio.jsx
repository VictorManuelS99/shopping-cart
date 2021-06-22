export const Envio = ({ envioCost }) => {
  return (
    <div className="product_bottom">
      <p>Envio:</p> <p>S/.{envioCost.toFixed(2)}</p>
    </div>
  );
};
