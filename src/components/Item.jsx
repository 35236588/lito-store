import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Item({ producto }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card">
      <h3>{producto.nombre}</h3>

      <p>
        ${producto.precio.toLocaleString("es-AR")}
      </p>

      <button onClick={() => addToCart(producto)}>
        Comprar
      </button>
    </div>
  );
}

export default Item;