import React from 'react';

export default function TodoTask({ todo, handleClick, handleDelete }) {
  return (
    <>
      <div>
        <p>{todo.task}</p>
        <input checked={todo.is_complete} type="checkbox" onChange={() => handleClick(todo)} />
      </div>
      <div>
        <button onClick={() => handleDelete(todo)}>Delete</button>
      </div>
    </>
  );
}
