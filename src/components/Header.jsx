import logo from "../assets/logo.jpeg";
import NavBar from "./NavBar";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Lito Store" />

      <h1>Lito Store</h1>

      <p>Celulares • Audio • Perfumes Importados</p>

      <NavBar />
    </div>
  );
}

export default Header;