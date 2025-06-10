import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import ItemDetail from '../components/ItemDetail';

const ItemDetailContainer = ({ onAddToCart }) => {
  const { itemId } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const fetchItem = new Promise((resolve) => {
      setTimeout(() => {
        const found = products.find(p => p.id.toString() === itemId);
        resolve(found);
      }, 1000);
    });

    fetchItem.then((res) => {
      setItem(res);
      setLoading(false);
    });
  }, [itemId]);

  return (
    <div className="container mt-4">
      {loading ? <p>Cargando producto...</p> : item ? (
        <ItemDetail item={item} onAddToCart={onAddToCart} />
      ) : (
        <p>Producto no encontrado</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
