import React from 'react'

export default function TodoAdd({ setOpenModal }) {
    return (
        <div className="todo-item-add-wrapper"
            onClick={() => { setOpenModal(true) }}>
            <span className="todo-item-add iconify" data-icon="fluent:add-circle-32-filled"></span>
        </div>
    )
}
