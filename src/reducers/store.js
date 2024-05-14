
import { createStore } from 'redux';
import taskReducer from '../reducers/taskReducer';

const persistedState = localStorage.getItem('tasks')
  ? JSON.parse(localStorage.getItem('tasks'))
  : { tasks: [] }; 

const store = createStore(taskReducer, persistedState);

store.subscribe(() => {
  localStorage.setItem('tasks', JSON.stringify(store.getState()));
});

export default store;
