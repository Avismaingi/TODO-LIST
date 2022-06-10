import React, { useState } from 'react';

export default function AddTodo(props) {
    const [title,settitle]=useState("")
    const [urg,seturg]=useState("")

    const submit=(e)=>{
        e.preventDefault();
        if(!title || !urg){
            alert("Title or description cannot be blank!")
        }
        else{
            props.addTodo(title,urg);
        }
        settitle("");
        seturg("");
    }

    let formStyle={
        width:"50%",
    };
    return (
        <div className="container my-3" style={formStyle}>
            <h3 className="text-center">Add a Todo</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label for="title" className="form-label">Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{settitle(e.target.value)}} className="form-control" id="title" aria-describedby=""/>
                </div>
                <div className="mb-3">
                    <label htmlFor="urg" className="form-label">Urgency</label>
                    <input type="text" value={urg} onChange={(e)=>{seturg(e.target.value)}} className="form-control" id="urg"/>
                </div>
                <button type="submit" className="btn btn-sm btn-success">Submit</button>
            </form>
        </div>
    )
}
