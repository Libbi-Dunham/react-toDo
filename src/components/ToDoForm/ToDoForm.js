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
            type="text"
            placeholder="task"
            value={task}
            onChange={(e) => {
              setTask(e.target.value);
            }}
          />
        </div>
        <div className="action">
          <button className="save-task" onClick={handleSubmit}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
