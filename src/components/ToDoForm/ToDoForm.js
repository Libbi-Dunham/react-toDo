import React from 'react';

export default function ToDoForm({ task, setTask, handleSubmit }) {
  return (
    <div className="todo-form">
      <form>
        <h3>Enter A Task</h3>
        <div className="form-control">
          <label>Task: </label>
          <input
            className="control"
            placeholder="task"
            type="text"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
        </div>
        <input className="save-task" type="radio" onClick={handleSubmit}>
          Save
        </input>
      </form>
    </div>
  );
}