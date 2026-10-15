import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Layout from "../components/Layout";

function Carrito() {
  const { cart } = useContext(CartContext);

  return (
    <Layout>
      <h2>Carrito de Compras</h2>

      {cart.map((producto, index) => (
        <div key={index}>
          <h3>{producto.nombre}</h3>
          <p>${producto.precio.toLocaleString("es-AR")}</p>
        </div>
      ))}
    </Layout>
  );
}

export default Carrito;