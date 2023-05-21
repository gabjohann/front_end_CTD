import { calculateAge, filterEvenNumbers, getProduct } from './utils/index';
import { Card } from './components/card/index';
import { useEffect, useState } from 'react';

export function App() {
  const calculatedAge = calculateAge(2002);
  const evenNumbers = filterEvenNumbers([1, 2, 3, 4, 5, 6]);

  const [titleProduct, setTitleProduct] = useState('');

  async function getAPIProduct() {
    const { title } = await getProduct(1);
    setTitleProduct(title);
  }

  useEffect(() => {
    getAPIProduct();
  }, []);

  return (
    <>
      <Card name='Lucas' city='Porto Alegre' age={21} />
      <p>{calculatedAge}</p>
      <p>{evenNumbers}</p>
      <h1>Título produto: {titleProduct}</h1>
    </>
  );
}
