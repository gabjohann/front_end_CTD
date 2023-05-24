import { API } from '../service/api';

export default async function getStudents() {
  return (await API.get('/aluno')).data;
}

export async function saveStudent(body) {
  return await API.post('/aluno', body);
}

export async function editStudent(body) {
  return await API.put(`/aluno/${body.id}`, body);
}

export async function deleteStudent(id) {
  return await API.delete(`/aluno/${id}`);
}
