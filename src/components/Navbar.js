import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="navbar">
      <h1>Todo List</h1>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/todo-list">Todo List</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
