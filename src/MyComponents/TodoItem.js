import React from 'react'

export default function TodoItem(props) {
  return (
    <div>
        <h4 className="my-2">{props.todo.title}</h4>
        <p>{props.todo.urgency}</p>
        <button className="btn btn-sm btn-danger" onClick={()=>props.onDelete(props.todo)}>Delete</button>
    </div>
  )
}
