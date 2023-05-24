import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import Form from './components/form';
import Table from './components/table/index';
const client = new QueryClient();

export function App() {
  const [formData, setFormData] = useState({
    id: '',
    nome: '',
    curso: '',
    bimestre: '',
  });

  function clearState() {
    setFormData({
      id: '',
      nome: '',
      matricula: '',
      curso: '',
      bimestre: '',
    });
  }

  return (
    <QueryClientProvider client={client}>
      <h1>Diário Eletrônico</h1>
      <Form
        formData={formData}
        setFormData={setFormData}
        clearState={clearState}
      />

      <Table formData={formData} setFormData={setFormData} />
      <ToastContainer />
    </QueryClientProvider>
  );
}
