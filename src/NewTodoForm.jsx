import { useState } from "react"

export function NewTodoForm(props) {
    const [newItem, setNewItem] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        if (newItem === "") return
    
        props.addTodo(newItem)

        setNewItem("")
      }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item</label>
                <input value={newItem} onChange={e => setNewItem(e.target.value)} // Whenever the input is changed, get the new value of the input and set that as the new value
                    type="text" id="item" />
            </div>
            <button className="btn">Add</button>
        </form>
    )
}