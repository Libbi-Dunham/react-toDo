import React, { useEffect, useState } from 'react';
import { fetchToDos } from '../services/todo';
import TodoTask from '../components/TodoTask';

export default function ToDo() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const taskData = await fetchToDos();
      setTask(taskData);
    };
    fetchData();
  }, []);

  return (
    <div>
      <ul>
        {task.map((obj) => (
          <div key={task.id}>
            <TodoTask input="radio" {...obj} />
          </div>
        ))}
      </ul>
    </div>
  );
}
