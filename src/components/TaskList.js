
import React from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, toggleTask } from '../reducers/taskActions';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggle = (id) => {
    dispatch(toggleTask(id));
  };

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
          <div className='btu'>
          <button onClick={() => handleToggle(task.id)}>{task.completed ? 'Undo' : 'Complete'}</button>
          <button onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
