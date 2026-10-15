import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function NavBar() {
  const { cart } = useContext(CartContext);

  return (
    <nav>
      <Link to="/">Inicio</Link> |{" "}
      <Link to="/productos">Productos</Link> |{" "}
      <Link to="/carrito">🛒 {cart.length}</Link>
    </nav>
  );
}

export default NavBar;