import React, { useState } from 'react';
import Input from './TodoInput';

const todoList = [];
const TodoForm = () => {
  const [todo, setTodo] = useState('');

  const handleChange = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Todo: ', todo);
    todoList.push(todo);
    console.log('TodoList: ', todoList);
    setTodo('');
  };
  return (
    <>
      <h2>Todo List</h2>
      <form onSubmit={handleSubmit}>
        <label>Todo: </label>
        <Input
          type="text"
          value={todo}
          onChange={handleChange}
          isRequired="false"
          autoComplete="off"
        />
        <Input type="submit" value="submit" />
      </form>
      <ul>
        {todoList.map((todo, index) => {
          return <li key={index}>{todo}</li>;
        })}
      </ul>
    </>
  );
};

export default TodoForm;
