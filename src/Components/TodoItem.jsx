import React from 'react'

export default function TodoItem({ todo, onComplete, onDelete }) {

    return (
        <li className="list-item">
            <span className={`todo-item-check ${todo.completed && 'completed'}`}
                data-icon="bx:bx-check-square"
                onClick={() => onComplete(todo.text)}>
                <span data-icon="bx:bx-check-square" className='iconify'></span>
            </span>
            <p>{todo.text}</p>
            <span className="todo-item-delete" onClick={() => onDelete(todo.text)}>
                <span className="iconify" data-icon="entypo:cross"></span>
            </span>
        </li>
    )
}
