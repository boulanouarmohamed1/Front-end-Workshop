import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]); // List of todos
  const [newTodo, setNewTodo] = useState(''); // Input field value

  const addTodo = () => {
    if (newTodo) {
      setTodos([...todos, newTodo]); // Add new task
      setNewTodo(''); // Clear input
    }
  };

  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index)); // Remove task
  };

  return (
    <div>
      <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo} <button onClick={() => deleteTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
