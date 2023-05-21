import { API } from '../services/api';

export async function getTodos() {
  return (await API.get('/todo')).data;
}

/**
 * Função para adicionar nova tarefa
 * @param {{title: string, date: Date}} todo
 */

export async function addTodo(todo) {
  return (await API.post('/todo', todo)).data;
}

/**
 * Função para editar uma tarefa
 * @param {{title: string, date: Date}} todo
 * @param {number} id
 */
export async function editTodo(data) {
  return (await API.put(`/todo/${data.id}`, data.payload)).data;
}
