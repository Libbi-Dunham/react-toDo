import React, { useState } from 'react';
import { createToDo } from '../../services/todo';
import ToDoForm from '../../components/ToDoForm/ToDoForm';
// import TodoTask from '../../components/TodoTask';

export default function TodoList() {
  const [task, setTask] = useState([]);
  // const [currentTasks, setCurrentTask] = useState([]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await createToDo(task);
      alert('You Have Added a New Task!');
    } catch {
      alert('No Success!');
    }
  };

  // const handleClick = async (todo) => {
  //   await todoCompleted(todo.id, !todo.is_completed);
  //   setTask((prevState) =>
  //     prevState.map((todo) =>
  //       todo.id === todo.id ? { ...todo, is_completed: !todo.is_completed } : todo
  //     )
  //   );
  // };

  return (
    <>
      {/* <div>
        <ul>
          {currentTasks.map((todo) => (
            <div key={todo.id}>
              <TodoTask todo={todo} handleClick={handleClick} />
            </div>
          ))}
        </ul>
      </div> */}
      <div>
        <h1>Add a New Task</h1>
        <ToDoForm task={task} setTask={setTask} handleSubmit={handleSubmit} />
      </div>
    </>
  );
}
