import Swal from 'sweetalert2';

const CartDropdown = ({ cartItems, onClearCart, close }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = () => {
    Swal.fire({
      icon: 'success',
      title: '¡Gracias por su compra!',
      text: 'En breve nos contactaremos con usted para enviarle el producto.',
      confirmButtonText: 'Cerrar',
      confirmButtonColor: '#198754',
    }).then(() => {
      onClearCart();
      close();
    });
  };

  return (
    <div className="card position-absolute end-0 mt-2" style={{ width: '20rem', zIndex: 999 }}>
      <div className="card-body">
        <h5 className="card-title">Carrito</h5>
        {cartItems.length === 0 ? (
          <p className="text-muted">El carrito está vacío.</p>
        ) : (
          <>
            <ul className="list-group list-group-flush mb-3">
              {cartItems.map(item => (
                <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <strong>{item.name}</strong>
                    <br />
                    Cant: {item.quantity}
                  </div>
                  <span>${item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
            <h6>Total: ${total}</h6>
            <button className="btn btn-success w-100 mt-2" onClick={handleCheckout}>
              Finalizar compra
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartDropdown;
