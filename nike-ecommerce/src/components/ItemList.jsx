import { Link } from 'react-router-dom';

const ItemList = ({ products, onAddToCart }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        {products.map((prod) => (
          <div className="col-md-4 mb-4" key={prod.id}>
            <div className="card h-100">
              <img src={prod.img} className="card-img-top" alt={prod.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{prod.name}</h5>
                <p className="card-text">${prod.price}</p>
                <div className="mt-auto d-flex justify-content-between">
                  <button className="btn btn-primary" onClick={() => onAddToCart(prod)}>
                    Agregar
                  </button>
                  <Link to={`/item/${prod.id}`} className="btn btn-outline-secondary">
                    Ver detalle
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
