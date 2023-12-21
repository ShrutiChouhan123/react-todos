import React from "react";
import TodoList from "./TodoList";

const index = () => {
  const todosData = [
    { id: 1, title: "task1",status:"pending" },
    { id: 2, title: "task2" ,status:"pending" },
    { id: 3, title: "task3" ,status:"pending" },
  ];

  return (
    <>
      <TodoList todoData={todosData} />
    </>
  );
};

export default index;
