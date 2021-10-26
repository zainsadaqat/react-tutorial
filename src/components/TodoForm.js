import React, { useState } from 'react';
import Input from './TodoInput';
import './TodoForm.css';

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
      <section className="flex-center">
        <form onSubmit={handleSubmit}>
          <article className="form-input">
            <label className="todo-label">Todo: </label>
            <Input
              className="todo-input"
              type="text"
              value={todo}
              onChange={handleChange}
              isRequired="false"
              autoComplete="off"
            />
          </article>
          <Input className="todo-add-btn" type="submit" value="Add" />
        </form>
        <article className="bg-light-blue">
          <ul className="">
            {todoList.map((todo, index) => {
              return (
                <li key={index} className="todo-item">
                  {todo}
                </li>
              );
            })}
          </ul>
        </article>
      </section>
    </>
  );
};

export default TodoForm;
