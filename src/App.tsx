import React, {useState} from 'react';
import InputField from './components/InputField';
import FooterField from './components/FooterField';
import {Task} from './model';
import CardTask from './components/CardTask';
import './App.css';

const App: React.FC = () => {
  const [task, setTask] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  const handleAddTasks = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      setTasks([...tasks, {id: Date.now(), task, isDone: false}]);
      setTask('');
    }
  };

  return (
    <div className='App'>
      <span className='TittleFor'>TaskyForTypescript</span>
      <p className='ParrButton'>TAKE NOTES</p>
      <InputField task={task} setTask={setTask} handleAddTasks={handleAddTasks}/>
      <div className='ListTasks'> {
        tasks.map((tsk) => (
          <CardTask 
            id={tsk.id} 
            task={tsk.task}
            isDone={tsk.isDone}
          />
        ))
      }
      </div>
      <FooterField 
        question='Want more about this App?'
        message='Explore more spotlights, or subscribe to receive daily or weekly doses of this App in your inbox.'
      />
    </div>
  );
};

export default App;