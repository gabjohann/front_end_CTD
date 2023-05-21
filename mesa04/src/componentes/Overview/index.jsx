import useTodo from '../../hooks/useTodo';
import { Task } from '../Task/index';

export function Overview() {
  const { todos } = useTodo();

  return (
    <div className='w-full h-screen bg-white'>
      <div className='py-16 px-11'>
        <div className='flex items-center justify-between'>
          <h1 className='text-2xl font-semibold'>Minhas Tarefas</h1>
          <p className='text-base font-light'>Total: 2 tarefas</p>
        </div>
        <div className='pt-9 flex flex-col gap-7'>
          {todos &&
            todos.map((todo, i) => (
              <Task
                key={i}
                title={todo.title}
                date={todo.date}
                category={todo.category}
                description={todo.description}
              />
            ))}
        </div>
      </div>
    </div>
  );
}
