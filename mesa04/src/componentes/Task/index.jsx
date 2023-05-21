import { useState } from 'react';
import PropTypes from 'prop-types';
import { Trash, PencilSimpleLine } from '@phosphor-icons/react';
import useTodo from '../../hooks/useTodo';
import formatDate from '../../utils/date';

export function Task(props) {
  const { title, date, category, description } = props;
  const { todos, deleteTodo } = useTodo();

  const [setId] = useState(null);
  const [setTitle] = useState('');

  function fillState(todo) {
    setId(todo._id);
    setTitle(todo.title);
  }

  return (
    <div className='rounded-xl border border-borderColor px-3 py-4'>
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-semibold'>{title}</h1>
        <h2 className='text-base font-light'>{formatDate(date)}</h2>
      </div>
      <p className='text-sm font-light pb-2'>{category}</p>
      <div className='flex items-center justify-between'>
        <p className='text-base font-light'>{description}</p>
        <div className='flex'>
          <PencilSimpleLine
            size={24}
            className='mr-2 cursor-pointer'
            color='#0FBA3F'
            onClick={() => fillState(todos)}
          />
          <Trash
            size={24}
            className='cursor-pointer'
            color='#E84118'
            onClick={() => deleteTodo(todos._id)}
          />
        </div>
      </div>
    </div>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
