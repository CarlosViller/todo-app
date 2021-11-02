import React, { useRef, useEffect } from 'react'
import { TodoContext } from '../TodoContext'

export default function TodoForm({ setOpenModal }) {

    const [newTodoValue, setNewTodoValue] = React.useState('')
    const { addTodo } = React.useContext(TodoContext)
    const todoForm = useRef()

    const onCancel = () => {
        setNewTodoValue('')
        setOpenModal(false)
    }

    const onSubmit = e => {
        e.preventDefault()
        if(newTodoValue){
            addTodo(newTodoValue)
        }else{
            alert('You can\'t add an empty TODO')
        }
        setOpenModal(false)
    }

    const submitOnKey = e => {
        if (e.code === 'Enter') {
            e.preventDefault()
            if(newTodoValue){
                addTodo(newTodoValue)
            }else{
                alert('You can\'t add an empty TODO')
            }
            setOpenModal(false)
        }
    }

    useEffect(()=> {
        if(todoForm.current) {
            todoForm.current.focus()
        }
    },[todoForm])

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="todo" />
            <textarea
                value={newTodoValue}
                onChange={e => (setNewTodoValue(e.target.value))}
                onKeyUp={submitOnKey}
                name="todo"
                id="create-todo-form"
                cols="20"
                rows="4"
                ref={todoForm}
                placeholder="Make dinner..."
            />
            <div className="btn-wrapper">
                <button onClick={onSubmit} type="submit">
                    Add
                </button>
                <button onClick={onCancel} type="button">
                    Cancel
                </button>
            </div>
        </form>
    )
}
