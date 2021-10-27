import React, {useState, useEffect} from 'react'
import useLocalStorage from './useLocalStorage';

const TodoContext = React.createContext()

function TodoProvider(props) {
    
    const [searchValue, setSearchValue] = useState('');
    const {item: todos, saveItem: saveTodos, loading, error} = useLocalStorage('TODOv1',[])
    const [todosFiltred, setTodosFiltred] = useState(todos)
    const [prueba,a] = useState('hola')

    //Ver porque se usa el useEfferct   
    useEffect(()=> {
        console.log('filtred')
        searchValue 
        ? setTodosFiltred(todos.filter(({text})=> text.toLowerCase().includes(searchValue.toLowerCase())))
        : setTodosFiltred(todos)
    },[searchValue])

    useEffect(() =>{
        console.log(prueba)
    },[prueba])

    const completeTodo = text => {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos[todoIndex].completed = true
        saveTodos(newTodos) 
    }

    const deleteTodo = text=> {
        const todoIndex = todos.findIndex(todo => todo.text === text)
        const newTodos = [...todos]
        newTodos.splice(todoIndex,1)
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
            completeTodo,
            deleteTodo,
            todosFiltred,
        }}>
            {props.children}
        </TodoContext.Provider>
    )
}

export {TodoContext, TodoProvider}