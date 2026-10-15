import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import Layout from "../components/Layout";

function ProductoDetalle() {
  const { addToCart } = useContext(CartContext);

  const [cantidad, setCantidad] = useState(1);

  const producto = {
    id: 1,
    nombre: "iPhone 15",
    precio: 800000,
  };

  return (
    <Layout>
      <h2>{producto.nombre}</h2>

      <p>${producto.precio.toLocaleString("es-AR")}</p>

      <button onClick={() => setCantidad(cantidad - 1)}>
        -
      </button>

      <span> {cantidad} </span>

      <button onClick={() => setCantidad(cantidad + 1)}>
        +
      </button>

      <br /><br />

      <button
        onClick={() =>
          addToCart({
            ...producto,
            cantidad,
          })
        }
      >
        Agregar al carrito
      </button>
    </Layout>
  );
}

export default ProductoDetalle;