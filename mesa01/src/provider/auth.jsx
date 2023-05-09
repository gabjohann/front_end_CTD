import { createContext, useState } from 'react';
import { API } from '../services/api';

export const AuthContext = createContext({});

export const AuthProvider = (props) => {
  const [products, setProducts] = useState([]);

  async function getAllProducts() {
    try {
      const response = await API.get('/products');
      setProducts(response.data.products);
    } catch (e) {
      alert('Erro ao carregar os produtos');
    }
  }

  return (
    <AuthContext.Provider
      value={{
        products,
        getAllProducts,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};
