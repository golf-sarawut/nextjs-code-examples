"use client"
import React, { useState, ChangeEvent } from "react";

type Todo = {
  text: string;
  completed: boolean;
};

export default function Page() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const handleToggleComplete = (index: number) => {
    const updatedTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  const handleDeleteTodo = (index: number) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
        <div className="mb-4 flex">
          <input
            type="text"
            value={newTodo}
            onChange={handleInputChange}
            className="text-black border border-gray-300 rounded p-2 flex-grow mr-2"
            placeholder="Add a new task..."
          />
          <button
            onClick={handleAddTodo}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Add
          </button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between mb-2 p-2 border-b border-gray-200"
            >
              <span
                className={`text-black flex-grow cursor-pointer ${todo.completed ? 'line-through text-gray-500' : ''}`}
                onClick={() => handleToggleComplete(index)}
              >
                {todo.text}
              </span>
              <button
                onClick={() => handleDeleteTodo(index)}
                className="bg-red-500 text-white p-2 rounded"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
