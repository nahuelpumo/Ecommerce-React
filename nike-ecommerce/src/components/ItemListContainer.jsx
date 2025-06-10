import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from '../components/ItemList';
import products from '../data/products';

const ItemListContainer = ({ onAddToCart }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();

  useEffect(() => {
    setLoading(true);

    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        if (categoryId) {
          resolve(products.filter(p => p.category === categoryId));
        } else {
          resolve(products);
        }
      }, 1000); 
    });

    fetchProducts.then((res) => {
      setItems(res);
      setLoading(false);
    });
  }, [categoryId]);

  return (
    <div className="container mt-4">
      <h2>{categoryId ? `Categoría: ${categoryId}` : 'Todos los productos'}</h2>
      {loading ? <p>Cargando productos...</p> : <ItemList products={items} onAddToCart={onAddToCart} />}
    </div>
  );
};

export default ItemListContainer;
