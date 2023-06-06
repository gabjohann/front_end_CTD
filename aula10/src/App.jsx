import { useState } from 'react';
import { useQuery } from '@tanstack/react-query';

import getCharacters from './services/api/';

export function App() {
  const [page, setPage] = useState(1);

  const { data, isFetching, isError } = useQuery(['@characters', page], () =>
    getCharacters(page)
  );

  if (isFetching) {
    return <p>Carregando...</p>;
  }

  if (isError) {
    return <p>Erro ao buscar os dados!</p>;
  }

  return (
    <>
      <h1>Página atual: {page}</h1>

      <select onChange={(e) => setPage(e.target.value)}>
        {Array.from({ length: data.info.pages }).map((value, index) => (
          <option key={index} value={index + 1}>
            {index + 1}
          </option>
        ))}
      </select>

      <button
        disabled={page < 2}
        onClick={() => setPage((previous) => previous - 1)}
      >
        Anterior
      </button>

      <button
        disabled={page > data.info.pages -1}
        onClick={() => setPage((previous) => previous + 1)}>
        Seguinte
      </button>

      <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
        {data.results.map((character) => (
          <li key={character.id}>
            <p>{character.name}</p>
            <img src={character.image} width={100} />
          </li>
        ))}
      </ul>
    </>
  );
}
