import React, { useState } from 'react';
import { createToDo } from '../../services/todo';
import ToDoForm from '../../components/ToDoForm/ToDoForm';

export default function TodoList() {
  const [task, setTask] = useState([]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await createToDo(task);
      alert('You Have Added a New Task!');
    } catch {
      alert('No Success!');
    }
  };

  return (
    <div>
      <h1>Add a New Task</h1>
      <ToDoForm task={task} setTask={setTask} handleSubmit={handleSubmit} />
    </div>
  );
}
