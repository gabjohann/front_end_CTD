import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { ProductDetails } from './pages/ProductDetails';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:productID' element={<ProductDetails />} />
      </Routes>
    </BrowserRouter>
  );
}
