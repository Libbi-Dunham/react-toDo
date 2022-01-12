import React from 'react';

export default function TodoTask({ todo, handleClick }) {
  return (
    <div>
      <p>{todo.task}</p>
      <input type="checkbox" onChange={() => handleClick(todo)} />
    </div>
  );
}
