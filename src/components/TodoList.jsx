import React, { useState } from 'react';
import TodoItem from './TodoItem';

const colors = [
  "bg-red-400", "bg-yellow-400", "bg-green-400", "bg-blue-400", "bg-indigo-400", "bg-purple-400", "bg-pink-400"
];

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  const addTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    const color = colors[todos.length % colors.length]; // Cycle through colors
    setTodos([...todos, { id: Date.now(), text: input, color }]);
    setInput('');
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const updateTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  };

  return (
    <div className="flex flex-col h-screen justify-center items-center bg-gray-100">
      <h1 className="text-2xl font-bold mb-6">My Todo List</h1>
      <form onSubmit={addTodo} className="flex justify-center items-center w-full max-w-md">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-grow p-4 border border-gray-300 rounded shadow"
          placeholder="Add a new todo"
        />
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 ml-4 rounded shadow">
          Add
        </button>
      </form>
      <div className="w-full max-w-md mt-8">
        {todos.map((todo, index) => (
          <TodoItem key={todo.id} todo={todo} deleteTodo={deleteTodo} color={todo.color} updateTodo={updateTodo} />
        ))}
      </div>
    </div>
  );
}

export default TodoList;
