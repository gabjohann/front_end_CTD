import { useState } from 'react';
import useTodo from '../../hooks/useTodo';
import { useForm } from 'react-hook-form';

export function SideBar() {
  const { addTodo } = useTodo();

  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');

  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    addTodo({ title, date });
  };

  return (
    <div className='bg-primary min-h-screen w-2/3 flex items-center justify-center'>
      <div className='w-80 h-4/6 bg-white rounded-xl'>
        <div className='flex items-center justify-center pt-11'>
          <h1 className='font-semibold text-title text-base pb-9'>
            Cadastrar Tarefa
          </h1>
        </div>
        <form
          className=' flex flex-col gap-8 px-7'
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className='border-b border-primary'>
            <input
              type='text'
              placeholder='Título'
              onChange={(e) => setTitle(e.target.value)}
              {...register('title')}
            />
          </div>

          <div className='border-b border-primary'>
            <input
              type='date'
              placeholder='Data'
              onChange={(e) => setDate(e.target.value)}
              {...register('date')}
            />
          </div>
          <div>
            <select
              name='taskType'
              className='text-placeHolder bg-transparent w-full border-b border-primary'
            >
              <option selected>Categoria</option>
              <option value='work'>Trabalho</option>
              <option value='leisure'>Lazer</option>
              <option value='priority'>Prioridade</option>
              <option value='others'>Outros</option>
            </select>
          </div>

          <div className='border-b border-primary cursor-not-allowed'>
            <input type='text' placeholder='Descrição' disabled={true} />
          </div>

          <div>
            <button className='bg-brightRed rounded-lg py-3 px-28 text-white font-normal text-base'>
              Submit
            </button>
            {/*   <input
              type='submit'
              value='Salvar'
              className='bg-brightRed rounded-lg py-3 px-28 text-white font-normal text-base'
              onClick={() => {
                //   addTodo({ title, date });
                console.log(title);
              }}
            /> */}
          </div>
        </form>
      </div>
    </div>
  );
}
