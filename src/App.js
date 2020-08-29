import React, { useState } from 'react';
import Form from './components/Form';
import List from './components/List';


//componente
export default function App() {
  const [tasks, setTask] = useState ([]);

  const onToggle = (id) => {
    const updatedTasks = tasks.map(element => {
      if(element.id === id) {
        const updatedElement = {
          ...element, done: !element.done
        }
        return updatedElement;
      }
      return element;
    })  
    setTask(updatedTasks);   
  }


  const addTask = (task, setText) => {
    setTask([...tasks, {id: Math.floor(Math.random() * 999), task, done: false, isEditing: false}]);
    setText("");
  };

  const deleteTask = (id) => {
    const updatedTask = tasks.filter(element => element.id !== id );
    setTask(updatedTask);  
  } 

  const editTask = (text, id) => {
    const updatedTasks = tasks.map(element => {
      if(element.id === id) {
        element.task= text;
        element.isEditing = true;
      }
      return element;
    })

   setTask(updatedTasks);
  }

  const onFinishEdit = (id) => {
    const updatedTasks = tasks.map(element => {
      if(element.id === id) {
        element.isEditing = false;
      }
      return element;
    })

   setTask(updatedTasks);
  }

  return (
    <div className="App">
      <Form onSave={addTask} />
      <List
        onToggle={onToggle}
        deleteTask={deleteTask}
        editTask={editTask}
        tasks={tasks}
        onFinishEdit={onFinishEdit}
      />
    </div>
  );
}