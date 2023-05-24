import { toast } from 'react-toastify';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import getCourses from '../../requests/courses';
import { editStudent, saveStudent } from '../../requests/student';

export default function Form(props) {
  const queryClient = useQueryClient();

  const { formData, setFormData, clearState } = props;

  const { data, isFetching } = useQuery(['@cursos'], getCourses, {
    refetchOnWindowFocus: false,
  });

  const { mutate, error } = useMutation(saveStudent, {
    onSuccess: () => {
      toast.success('Cadastro salvo com sucesso!');
      queryClient.invalidateQueries(['@alunos']);
    },
    onError: () => toast.error('Erro ao salvar os dados do aluno!'),
  });

  const { mutate: editMutate } = useMutation(editStudent, {
    onSuccess: () => {
      toast.success('Cadastro editado com sucesso!');
      queryClient.invalidateQueries(['@alunos']);
    },
    onError: () => toast.error('Erro ao editar os dados do aluno!'),
  });

  function edit() {
    editMutate({
      id: formData.id,
      nome: formData.nome,
      matricula: formData.matricula,
      curso: formData.curso,
      bimestre: formData.bimestre,
    });
    clearState();
  }

  function save() {
    mutate({
      id: formData.id,
      nome: formData.nome,
      matricula: formData.matricula,
      curso: formData.curso,
      bimestre: formData.bimestre,
    });
    clearState();
  }

  if (error) {
    return <p>Erro ao salvar o cadastro do aluno...</p>;
  }

  if (isFetching) {
    return <p>Carregando dados...</p>;
  }

  return (
    <div>
      <input
        placeholder='Nome'
        value={formData.nome}
        onChange={(event) =>
          setFormData({ ...formData, nome: event.target.value })
        }
      />
      <input
        placeholder='Matricula'
        value={formData.matricula}
        onChange={(event) =>
          setFormData({ ...formData, matricula: event.target.value })
        }
      />

      <select
        defaultValue={formData.curso}
        onChange={(event) =>
          setFormData({ ...formData, curso: event.target.value })
        }
      >
        <option hidden>Selecione um curso</option>
        {data.cursos.map((curso, idx) => (
          <option key={idx}>{curso.name}</option>
        ))}
      </select>
      <input
        placeholder='Bimestre'
        value={formData.bimestre}
        onChange={(event) =>
          setFormData({ ...formData, bimestre: event.target.value })
        }
      />
      <button onClick={formData.id ? edit : save}>Salvar</button>
    </div>
  );
}
