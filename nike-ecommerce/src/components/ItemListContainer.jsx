const ItemListContainer = ({ greeting, products, onAddToCart }) => {
  return (
    <div className="container mt-4">
      <h2>{greeting}</h2>
      <div className="row">
        {products.map((prod) => (
          <div className="col-md-4 mb-4" key={prod.id}>
            <div className="card">
              <img src={prod.img} className="card-img-top" alt={prod.name} />
              <div className="card-body">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">${prod.price}</p>
                <button className="btn btn-primary" onClick={() => onAddToCart(prod)}>
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
