import React from 'react'
import { TodoContext } from '../TodoContext'

export default function TodoList(props) {

    var content = props.children
    var { searchValue } = React.useContext(TodoContext)

    if (!props.children.length && searchValue) content = <p className="todo-not-found">No se encontraron tareas :(</p>

    return (
        <ul className="todo-list">
            {content}
        </ul>
    )
}
