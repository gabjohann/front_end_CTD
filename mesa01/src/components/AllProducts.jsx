import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { API } from '../services/api';
import { ProductCard } from './ProductCard';

export function ProductList() {
  const [products, setProducts] = useState([]);

  async function getAllProducts() {
    const response = await API.get('/products');
    setProducts(response.data.products);
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className='flex items-center justify-center py-12'>
      <div className='grid grid-cols-4 gap-12'>
        {products.map((product) => (
          <Link key={product.id} to={`/details/${product.id}`}>
            <ProductCard
              cardImagePath={product.thumbnail}
              cardImageAlt={product.description}
              cardProductTitle={product.title}
              cardProductDescription={product.brand}
              cardProductPrice={product.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
