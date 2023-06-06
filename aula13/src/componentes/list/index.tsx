import { useState } from 'react';

import { frutas} from './data';
import  CardFruit  from './componentes/card-fruit'

export default function List() {
  const [fruta, setFruta] = useState('');

  return (
    <div>
      <h1>Minha Lista de Frutas:</h1>
      {
       frutas.map((fruta: string) => (
         <>
           <input type="text" onChange={(e) => setFruta(e.target.value)} />
           <CardFruit fruit={fruta} />
         </>
        ))
      }
    </div>
  )
}