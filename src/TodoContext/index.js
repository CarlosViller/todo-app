import React, { useState, useEffect } from 'react'
import useLocalStorage from './useLocalStorage';

const TodoContext = React.createContext()

function TodoProvider(props) {

    const [searchValue, setSearchValue] = useState('');
    const { item: todos, saveItem: saveTodos, loading, error } = useLocalStorage('TODOSv1', [])
    const [todosFiltred, setTodosFiltred] = useState(todos)
    const [openModal, setOpenModal] = useState(false)

    useEffect(() => {
        searchValue
            ? setTodosFiltred(todos.filter(({ text }) => text.toLowerCase().includes(searchValue.toLowerCase())))
            : setTodosFiltred(todos)
    }, [searchValue, todos])

    const addTodo = text => {
        const newTodos = [...todos]
        newTodos.push({
            completed: false,
            text: text
        })
        saveTodos(newTodos)
    }

    const completeTodo = text => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true
        saveTodos(newTodos)
    }

    const deleteTodo = text => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos.splice(todoIndex, 1)
        saveTodos(newTodos)
    }

    return (
        <TodoContext.Provider value={{
            todos,
            saveTodos,
            loading,
            error,
            searchValue,
            setSearchValue,
            addTodo,
            completeTodo,
            deleteTodo,
            todosFiltred,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export { TodoContext, TodoProvider }