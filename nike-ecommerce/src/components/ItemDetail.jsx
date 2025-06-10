const ItemDetail = ({ item, onAddToCart }) => {
  return (
    <div className="card mb-3 mx-auto" style={{ maxWidth: '540px' }}>
      <div className="row g-0">
        <div className="col-md-4">
          <img src={item.img} className="img-fluid rounded-start" alt={item.name} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{item.name}</h5>
            <p className="card-text">${item.price}</p>
            <p className="card-text"><small className="text-muted">Categoría: {item.category}</small></p>
            <button className="btn btn-success" onClick={() => onAddToCart(item)}>
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
