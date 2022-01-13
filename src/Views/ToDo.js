import React, { useEffect, useState } from 'react';
import { fetchToDos, todoCompleted } from '../services/todo';
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

  return (
    <>
      <div>
        <ul>
          {currentTasks.map((todo) => (
            <div key={todo.id}>
              <TodoTask todo={todo} handleClick={handleClick} />
            </div>
          ))}
        </ul>
      </div>
    </>
  );
}
