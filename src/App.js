import TodoForm from './components/TodoForm';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App container">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/todo-list">
            <TodoForm />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
