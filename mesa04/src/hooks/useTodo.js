import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { addTodo, deleteTodo, editTodo, getTodos } from '../requests/todo';

export default function useTodo() {
  const queryClient = useQueryClient();

  const { data, isFetching, error } = useQuery(['@todos'], getTodos, {
    refetchOnWindowFocus: false,
  });

  const addMutate = useMutation(addTodo, {
    onSuccess: () => queryClient.invalidateQueries(['@todos']),
    onError: () => alert('Erro ao adicionar uma tarefa!'),
  });

  const editMutate = useMutation(editTodo, {
    onSuccess: () => queryClient.invalidateQueries(['@todos']),
    onError: () => alert('Erro ao editar uma tarefa!'),
  });

  const deleteMutate = useMutation(deleteTodo, {
    onSuccess: () => queryClient.invalidateQueries(['@todos']),
    onError: () => alert('Erro ao deletar uma tarefa!'),
  });

  return {
    todos: data,
    isFetching,
    error,
    addTodo: addMutate.mutate,
    editTodo: editMutate.mutate,
    deleteTodo: deleteMutate.mutate,
  };
}
