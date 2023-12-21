import React, { useState } from "react";
import Headers from "../ui/Headers";
import Table from "../ui/Table";
import TodoForm from "./TodoForm";

const TodoList = (props) => {
  const [todos, setTodos] = useState(props.todoData);
  const [editItem, setEditItem] = useState(null);

  const deleteTodo = (idToDelete) => {
    const updatedTodos = todos.filter((todo) => todo.id !== idToDelete);
    setTodos(updatedTodos);
  };

  const editTodo = (itemToEdit) => {
    setEditItem(itemToEdit);
  };

  const addTodo = (newTodo) => {
    if (editItem) {
      updateTodo(newTodo);
    } else {
      addNewTodo(newTodo);
    }
  };

  const addNewTodo = (newTodo) => {
    const todoWithId = { ...newTodo, id: Math.floor(Math.random() * 10) };
    const updatedTodos = [...todos, todoWithId];
    setTodos(updatedTodos);
  };

  const updateTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === editItem.id ? updatedTodo : todo
    );
    setTodos(updatedTodos);
    setEditItem(null);
  };

  return (
    <div className=" container">
      <div>
        <TodoForm onAdd={addTodo} editData={editItem} />
      </div>
      <div>
        <Headers text={"List of data"} />
      </div>
      <div className="mt-4">
        <Table list={todos} onDelete={deleteTodo} onEdit={editTodo} />
      </div>
    </div>
  );
};

export default TodoList;
