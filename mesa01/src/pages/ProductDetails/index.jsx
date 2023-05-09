import ReactLoading from 'react-loading';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { API } from '../../services/api';
import { formatMoney } from '../../utils/formatMoney';

import { Header } from '../../components/Header';
import { ProductCard } from '../../components/ProductCard';

export function ProductDetails() {
  const { productID } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [randomID, setRandomID] = useState([]);

  useEffect(() => {
    getProductDetails();
  }, []);

  async function getProductDetails() {
    const response = await API.get(`/products/${productID}`);
    setProduct(response.data);

    setLoading(false);
  }

  if (loading) {
    return <ReactLoading type={'bubbles'} color='#512DA8' />;
  }

  function generateRandomNumber() {
    for (let i = 0; i < 4; i++) {
      randomID.push(Math.floor(Math.random() * 30) + 1);
    }
    setRandomID(randomID);
  }

  return (
    <>
      <Header />
      <div className='my-24 mx-24 grid grid-rows-2 grid-flow-col gap-14 items-center justify-between'>
        <div className='row-span-3'>
          <img
            src={product.thumbnail}
            alt={product.description}
            width={508}
            height={433}
          />
        </div>
        <div className='col-span-2'>
          <h1 className='text-textColor text-3xl font-medium pb-7'>
            {product.title}
          </h1>
          <p className='text-secondaryColor text-lg font-bold pb-7'>
            {product.brand}
          </p>
          <p className='text-textColor text-4xl font-bold'>
            {formatMoney(product.price)}
          </p>
        </div>
        <div className='row-span-2 col-span-2 border border-borderColor rounded-lg p-9'>
          <p className='text-textColor text-lg font-light'>
            {product.description}
          </p>
        </div>
      </div>

      <div className='flex items-center justify-center'>
        <p className='text-textColor text-3xl'>Veja outros produtos</p>
      </div>

      <div className='flex items-center justify-center gap-10 my-14'>
        <ProductCard
          key={product.id}
          cardImagePath={product.thumbnail}
          cardImageAlt={product.description}
          cardProductTitle={product.title}
          cardProductDescription={product.brand}
          cardProductPrice={product.price}
        />
        <ProductCard
          key={product.id}
          cardImagePath={product.thumbnail}
          cardImageAlt={product.description}
          cardProductTitle={product.title}
          cardProductDescription={product.brand}
          cardProductPrice={product.price}
        />
        <ProductCard
          key={product.id}
          cardImagePath={product.thumbnail}
          cardImageAlt={product.description}
          cardProductTitle={product.title}
          cardProductDescription={product.brand}
          cardProductPrice={product.price}
        />
      </div>
    </>
  );
}
// fazer requisição dos produtos novamente
{
  /*  {randomID.map((id) => (
    <ProductCard
      key={id}
      cardImagePath={product.thumbnail}
      cardImageAlt={product.description}
      cardProductTitle={product.title}
      cardProductDescription={product.brand}
      cardProductPrice={product.price}
    />
  ))} */
}
