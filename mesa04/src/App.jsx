import { SideBar } from './componentes/SideBar';
import { Overview } from './componentes/Overview';

export function App() {
  return (
    <div className='flex flex-row'>
      <SideBar />
      <Overview />
    </div>
  );
}
