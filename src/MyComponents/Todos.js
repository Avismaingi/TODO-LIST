import React from 'react'
import TodoItem from "./TodoItem"

export default function Todos(props) {
  let TodoStyle={
    width:"60%",
};
  return (
    <div className="container" style={TodoStyle}>
        <h3 className="text-center my-2">Todos List</h3>
        {props.todos.length===0? "No Todos to display" :
        props.todos.map((todo)=>{
          return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
        })}
    </div>
  )
}
