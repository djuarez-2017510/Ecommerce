import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';
import { CartProvider } from './hooks/CartContext';
import { NavigationProvider } from './hooks/NavigationContext';
import { FavoritesProvider } from './hooks/FavoritesContext'; // ← Agregalo

function App() {
  return (
    <CartProvider>
      <FavoritesProvider> {/* ← Agregalo aquí */}
        <NavigationProvider>
          <div className="layout">
            <BrowserRouter>
              <Header />
              <main className="content">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/products" element={<Products />} />
                  <Route path="/cart" element={<Cart />} />
                </Routes>
              </main>
              <Footer />
            </BrowserRouter>
          </div>
        </NavigationProvider>
      </FavoritesProvider>
    </CartProvider>
  );
}

export default App;
