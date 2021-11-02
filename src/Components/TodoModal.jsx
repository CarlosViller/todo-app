import ReactDOM from 'react-dom'

export default function Modal({ children, setOpenModal }) {


    const content = (
        <div className="modal-wrapper">
            <div className="modal-content">
                <p>Create a todo!</p>
                {children}
            </div>
        </div>
    )

    return (
        ReactDOM.createPortal(
            content,
            document.getElementById('modal')
        )
    )
}
