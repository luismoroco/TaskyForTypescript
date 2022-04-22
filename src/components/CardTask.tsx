import React from 'react';
import {Task} from '../model'

const CardTask: React.FC<Task> = ({id, task, isDone}) => {
  return (
    <div className='CardTask'>
      {id}
      <div className='CardSubBox'>
        {task}
        {isDone}
      </div>
    </div>
  );
};

export default CardTask;