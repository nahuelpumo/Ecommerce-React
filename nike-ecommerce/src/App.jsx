import { useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import products from './data/products';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems((prevItems) => {
      const found = prevItems.find(item => item.id === product.id);
      if (found) {
        return prevItems.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <>
      <NavBar cartItems={cartItems} onClearCart={handleClearCart} />
      <ItemListContainer
        products={products}
        onAddToCart={handleAddToCart}
      />
      <Footer />
    </>
  );
}

export default App;
