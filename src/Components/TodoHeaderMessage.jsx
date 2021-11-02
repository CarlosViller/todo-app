import React from 'react'
import { TodoContext } from '../TodoContext'

export default function TodoHeaderMessage({ todosListLength }) {

    const { error, loading } = React.useContext(TodoContext)

    return (
        <div className="header-message">
            {error && <p>Error</p>}
            {loading && <p>Loading...</p>}
            {(!loading && !todosListLength) && <p>Add your first TODO</p>}
        </div>
    )
}
