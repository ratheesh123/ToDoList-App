import React, { useState } from 'react';

function TodoItem({ todo, deleteTodo, color, updateTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    if (isEditing) {
      updateTodo(todo.id, editText); // Update todo text with new value
    }
    setIsEditing(!isEditing); // Toggle editing state
  };

  return (
    
    <div className="flex justify-center">
        
      <div className={`w-full max-w-xl flex justify-between items-center p-3 m-2 rounded-lg shadow-lg ${color} text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105`}>
        {isEditing ? (
          <input
            autoFocus
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            className="flex-grow bg-white text-black p-2 rounded"
            onKeyPress={(e) => e.key === 'Enter' && handleEdit()} // Save on Enter key
          />
        ) : (
          <span className="text-lg">{todo.text}</span>
        )}
        <div>
          <button
            onClick={handleEdit}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded mr-2 transition duration-150 ease-in-out"
          >
            {isEditing ? 'Save' : 'Edit'}
          </button>
          <button
            onClick={() => deleteTodo(todo.id)}
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded transition duration-150 ease-in-out"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;
