import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';

const NavBar = ({ cartItems, onClearCart }) => {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <Link to="/">
        <img width={80} src="/images/logo.png" alt="logo" />
      </Link>
      <Link to="/" className="navbar-brand text-white text-decoration-none">
        OG Sneakers
      </Link>
      <div className="d-flex gap-3">
        <Link to="/category/nike" className="btn btn-outline-light">Nike</Link>
        <Link to="/category/adidas" className="btn btn-outline-light">Adidas</Link>
        <Link to="/category/puma" className="btn btn-outline-light">Puma</Link>
      </div>
      <CartWidget cartItems={cartItems} onClearCart={onClearCart} />
    </nav>
  );
};

export default NavBar;
