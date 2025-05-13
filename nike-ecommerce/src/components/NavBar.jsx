import CartWidget from './CartWidget';

const NavBar = ({ cartItems, onClearCart }) => {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
        <img width={80} src="/images/logo.png" alt="logo" />
      <a className="navbar-brand" href="#">OG Sneakers</a>
      <CartWidget cartItems={cartItems} onClearCart={onClearCart} />
    </nav>
  );
};

export default NavBar;
