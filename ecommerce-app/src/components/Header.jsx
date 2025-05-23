import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/products">Productos</Link> |{" "}
        <Link to="/cart">Carrito</Link>
      </nav>
    </header>
  );
}

export default Header;
