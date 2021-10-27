import './App.css';
import React from 'react'
import TodoCounter from './Components/TodoCounter';
import TodoList from './Components/TodoList';
import TodoSearch from './Components/TodoSearch';
import TodoItem from './Components/TodoItem';
import TodoAdd from './Components/TodoAdd';
import {TodoProvider, TodoContext} from './TodoContext'

function App() {
  var defaultTodos = [
    {text: 'hola', completed: true},
    {text: 'chao', completed: false},
    {text: 'si', completed: true}
  ]

  // const {
  //   error,
  //   loading,
  //   todosFiltred,
  //   completeTodo,
  //   deleteTodo,
  // } = React.useContext(TodoContext)
  
  return (
    <TodoProvider>
      <div className="app-wrapper">
        <div className="todo-machine">
          <TodoCounter 
            className="todo-counter"
          />
          <TodoSearch 
            className="todo-search"
          />
          <TodoContext.Consumer>
            {({
              error,
              loading,
              todosFiltred,
              completeTodo,
              deleteTodo,
            }) => (
              <TodoList className="todo-list">
              {error && <p>Hubo un error</p>}
              {loading && <p>Estamos cargando</p>}
              {(!loading && !todosFiltred.length) && <p>Crea tu primer todo!</p>}

              {todosFiltred.map(todo => (
                <TodoItem 
                  className="todo-item"
                  key={todo.text}
                  todo={todo}
                  onComplete={completeTodo}
                  onDelete={deleteTodo}  
                />
              ))}
            </TodoList>
            )}
          </TodoContext.Consumer>
        
          <TodoAdd></TodoAdd>
        </div>    
      </div>
    </TodoProvider>
  );
}

export default App;
