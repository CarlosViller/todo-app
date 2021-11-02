import React from 'react'
import { TodoContext } from '../TodoContext'

export default function TodoCounter() {

    const { todos } = React.useContext(TodoContext)

    var content
    const completed = todos.filter(todo => !!todo.completed).length
    const total = todos.length

    if (!total) {
        content = 'You don\'t have any TODOS'
    } else {
        content = `You have completed ${completed} of ${total} TODOS`
    }

    return (
        <div className="todo-header">
            <h1> TODO APP</h1>
            <h2>
                {content}
            </h2>
        </div>
    )
}
