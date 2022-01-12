import React, { useEffect, useState } from 'react';
import { createToDo, fetchToDos } from '../../services/todo';
import ToDoForm from '../../components/ToDoForm/ToDoForm';
import TodoTask from '../../components/TodoTask';

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

  useEffect(() => {
    const fetchData = async () => {
      const taskData = await fetchToDos();
      setTask(taskData);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <h1>Add a New Task</h1>
        <ToDoForm task={task} setTask={setTask} handleSubmit={handleSubmit} />
      </div>
      <div>
        <ul>
          {task.map((item) => (
            <div key={item.id}>
              <TodoTask input="radio" {...item} />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
