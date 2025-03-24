import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos((prevTodos) => [...prevTodos, todo]);
  };

  return (
    <div className="todo-container">
      <button className="todo-button" onClick={() => addTodo('New Todo')}>Add Todo</button>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li className="todo-item" key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
