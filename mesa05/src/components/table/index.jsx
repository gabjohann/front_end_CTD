import { toast } from 'react-toastify';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import getStudents from '../../requests/student';
import deleteStudent from '../../requests/student';

export default function Table(props) {
  const queryClient = useQueryClient();
  const { setFormData } = props;

  const { data, isFetching } = useQuery(['@alunos'], getStudents, {
    refetchOnWindowFocus: false,
  });

  const { mutate } = useMutation(deleteStudent, {
    onSuccess: () => {
      queryClient.invalidateQueries(['@alunos']);
      toast.success('Cadastro do aluno deletado com sucesso!');
    },
    onError: () => {
      toast.error('Erro deletar o cadastro do aluno!');
    },
  });

  if (isFetching) {
    return <h3>Buscando alunos...</h3>;
  }

  function apagarAluno(id) {
    mutate(id);
  }

  function preencherCampos(aluno) {
    setFormData({ ...aluno, id: aluno._id });
  }

  return (
    <div>
      <h2>Alunos Cadastrados</h2>
      <ul>
        {data.map((aluno, index) => {
          delete aluno._id;
          delete aluno.__v;

          return (
            <li key={index}>
              <>
                <p>{aluno.nome}</p>
                <p>{aluno.matricula}</p>
                <p>{aluno.curso}</p>
                <p>{aluno.bimestre}</p>
                <button onClick={() => preencherCampos(aluno)}>Editar</button>
                <button onClick={() => apagarAluno(aluno._id)}>Excluir</button>
              </>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
