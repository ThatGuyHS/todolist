import React, { useState } from "react";

function TodoList() {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo("");
  };

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleRemove = (index) => {
    setTodoList(todoList.filter((_, i) => i !== index));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={todo} onChange={handleChange} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todoList.map((item, index) => (
          <li key={index}>
            {item}
            <button type="button" onClick={() => handleRemove(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
