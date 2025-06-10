import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import ItemListContainer from './containers/ItemListContainer';
import ItemDetailContainer from './containers/ItemDetailContainer';

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
    <BrowserRouter>
      <NavBar cartItems={cartItems} onClearCart={handleClearCart} />
      <Routes>
        <Route path="/" element={<ItemListContainer onAddToCart={handleAddToCart} />} />
        <Route path="/category/:categoryId" element={<ItemListContainer onAddToCart={handleAddToCart} />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer onAddToCart={handleAddToCart} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
