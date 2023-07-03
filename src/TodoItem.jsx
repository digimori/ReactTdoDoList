export function TodoItem({ completed, id, title, toggleToDo, deleteTodo }) {
    return (
    <li>
        <label>
          <input type="checkbox" 
        checked={completed} 
        onChange={e => toggleToDo(id, e.target.checked)} // This is checking if the toggle is checked, e=eventlistener
          /> 
          {title}
        </label>
        <button onClick={() => deleteTodo(id)} 
        className="btn btn-danger">Delete</button>
      </li>
)}