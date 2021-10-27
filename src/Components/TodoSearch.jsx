import React from 'react'
import { TodoContext } from '../TodoContext'

export default function TodoSearch() {

    const {searchValue, setSearchValue} = React.useContext(TodoContext)
    return (
        <React.Fragment>
            <div className="todo-search-wrapper">
                <input  className="todo-search" 
                        type="text"
                        placeholder="Busca una tarea"
                        onChange={e=> {
                            setSearchValue(e.target.value)
                        }}/>
            </div>
            <p className="search-query">{searchValue}</p>
        </React.Fragment>
    )
}
