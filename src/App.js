import './App.css';
import React from 'react'
import TodoCounter from './Components/TodoCounter';
import TodoList from './Components/TodoList';
import TodoSearch from './Components/TodoSearch';
import TodoItem from './Components/TodoItem';
import TodoAdd from './Components/TodoAdd';
import { TodoProvider, TodoContext } from './TodoContext'
import TodoHeaderMessage from './Components/TodoHeaderMessage';
import Modal from './Components/TodoModal';
import TodoForm from './Components/TodoForm';

function App() {

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
              todosFiltred,
              completeTodo,
              deleteTodo,
              openModal,
              setOpenModal
            }) => (
              <React.Fragment>
                <TodoHeaderMessage todosListLength={todosFiltred.length} />
                <TodoList className="todo-list">
                  {todosFiltred.map( (todo,index) => (
                    <TodoItem
                      className="todo-item"
                      key={index}
                      todo={todo}
                      onComplete={completeTodo}
                      onDelete={deleteTodo}
                    />
                  ))}
                </TodoList>
                {openModal && (
                  <Modal setOpenModal={setOpenModal}>
                    <TodoForm setOpenModal={setOpenModal} />
                  </Modal>
                )}
                <TodoAdd setOpenModal={setOpenModal} />
              </React.Fragment>
            )}
          </TodoContext.Consumer>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
