import { API } from '../service/api';

export default async function getCourses() {
  return (await API.get('/cursos')).data;
}
