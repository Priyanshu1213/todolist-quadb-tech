
import React from 'react';
import './App.css'
import { Provider } from 'react-redux';
import store from './reducers/store';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>ToDo List</h1>
        <TaskInput />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;

