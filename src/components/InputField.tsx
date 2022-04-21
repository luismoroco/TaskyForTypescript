import React from 'react';
import './styles.css';

interface Props {
  task: string;
  setTask: React.Dispatch<React.SetStateAction<string>>;
  handleAddTasks: (e: React.FormEvent) => void;
}

const InputField: React.FC<Props> = ({task, setTask, handleAddTasks}) => {  
  return (
    <form className='input' onSubmit={handleAddTasks}>
      <input className='inputBox' 
        value={task}
        type='input'
        placeholder='Enter a pendient Task'
        minLength={3}
        required
        onChange={(e) => setTask(e.target.value)}
      />
      <button className='inputSubmit'
        type='submit'
      >Save Task</button>
    </form>
  );
};

export default InputField;