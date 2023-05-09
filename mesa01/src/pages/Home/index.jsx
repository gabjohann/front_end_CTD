import { Header } from '../../components/Header';
import { ProductList } from '../../components/AllProducts';

export function Home() {
  return (
    <div className='w-[1920px] h-[1080px]'>
      <Header />
      <ProductList />
    </div>
  );
}
