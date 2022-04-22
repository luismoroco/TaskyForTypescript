import React from 'react';
import {Task} from '../model'

const CardTask: React.FC<Task> = ({id, task, isDone}) => {
  return (
    <div className='CardTask'>
      {id}
      {task}
      {isDone}
    </div>
  );
};

export default CardTask;