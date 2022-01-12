import React, { useEffect, useState } from 'react';
import { fetchToDos, todoCompleted } from '../services/todo';
import TodoTask from '../components/TodoTask';

export default function ToDo() {
  const [currentTasks, setCurrentTask] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const taskData = await fetchToDos();
      setCurrentTask(taskData);
    };
    fetchData();
  }, []);

  const handleClick = async (todo) => {
    await todoCompleted(todo.id, !todo.is_complete);
    setCurrentTask((prevState) =>
      prevState.map((todo) =>
        todo.id === todo.id ? { ...todo, is_complete: !todo.is_complete } : todo
      )
    );
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
