import React, { useEffect, useState } from 'react';
import { fetchToDos, todoCompleted, deleteTodoById } from '../services/todo';
import TodoTask from '../components/TodoTask';

export default function ToDo() {
  const [currentTasks, setCurrentTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const taskData = await fetchToDos();
      setCurrentTasks(taskData);
    };
    fetchData();
  }, []);

  const handleClick = async (todo) => {
    await todoCompleted(todo.id, !todo.is_complete);
    const fetchData = await fetchToDos();
    setCurrentTasks(fetchData);
  };

  const handleDelete = async ({ id }) => {
    const shouldDelete = confirm('Do you want to delete this task?');

    if (shouldDelete) {
      await deleteTodoById(id);
      const resp = await todoCompleted();
      setCurrentTasks(resp);
    }
    window.location.reload();
  };

  return (
    <>
      <div>
        <ul>
          {currentTasks.map((todo) => (
            <div key={todo.id}>
              <TodoTask todo={todo} handleClick={handleClick} handleDelete={handleDelete} />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
