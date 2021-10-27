import React from 'react'

export default function TodoList(props) {
    
    var content = props.children

    if(!props.children.length && props.searchValue) content = <p className="todo-not-found">No se encontraron tareas :(</p>
    
    return (
        <ul>
            {content}
        </ul>
    )
}
