import { API } from '../services/api';

export async function getTodos() {
  return (await API.get('/todo')).data;
}

/**
 * Função para adicionar nova tarefa
 * @param {{title: string, date: Date}} todo
 */

export async function addTodo() {
  return (await API.post('/todo', todo)).data;
}
