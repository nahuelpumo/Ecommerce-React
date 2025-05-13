import { useState } from 'react';
import CartDropdown from './CartDropdown';

const CartWidget = ({ cartItems, onClearCart }) => {
  const [isOpen, setIsOpen] = useState(false);

  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="position-relative">
      <button className="btn btn-outline-light" onClick={() => setIsOpen(!isOpen)}>
        🛒
        {totalItems > 0 && (
          <span className="badge bg-danger ms-1">{totalItems}</span>
        )}
      </button>
      {isOpen && (
        <CartDropdown
          cartItems={cartItems}
          onClearCart={onClearCart}
          close={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default CartWidget;
