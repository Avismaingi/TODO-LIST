import './App.css';
import Header from './MyComponents/Header';
import Todos from './MyComponents/Todos';
import Footer from './MyComponents/Footer';
import AddTodo from './MyComponents/AddTodo';
import About from './MyComponents/About';
import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { db } from './firebase-config';
import { addDoc, collection, getDocs, updateDoc, deleteDoc, doc } from "firebase/firestore";


function App() {
  const userCollectionRef = collection(db, "todos");
  const [NewTask, setNewTask] = useState("");
  const [NewUrg, setNewUrg] = useState("");
  const [todos, settodos] = useState([]);

  const creatUser = async () => {
    await addDoc(userCollectionRef, { SNo: todos.length + 1, Task: NewTask, Urgency: NewUrg });
    console.log(NewTask, NewUrg)
  };


  const updateUser = async (id, Urgency) => {
    if (Urgency === "Urgent") {
      const todoDoc = doc(db, "todos", id);
      // console.log(todoDoc);
      const newFields = { Urgency: "Not Urgent" };
      await updateDoc(todoDoc, newFields);
    }
    else {
      const todoDoc = doc(db, "todos", id);
      const newFields = { Urgency: "Urgent" };
      await updateDoc(todoDoc, newFields);
    }
  };



  const deleteUser = async (id) => {
    const todoDoc = doc(db, "todos", id);
    await deleteDoc(todoDoc);
  };

  useEffect(() => {
    const gettodos = async () => {
      const data = await getDocs(userCollectionRef)//get all documents from specific collection
      settodos(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    gettodos()
  }, [creatUser, updateUser])


  return (
    <>
      <div className="App">
        {/* <input type="number" placeholder="Sno.." /> */}
        <input type="text" placeholder="Task.." onChange={(e) => { setNewTask(e.target.value); }} />
        <input type="text" placeholder="Urgency.." onChange={(e) => { setNewUrg(e.target.value); }} />
        <button onClick={creatUser}>Create User</button>
        {todos.map((todo) => {
          return <div>
            <p>SNo: {todo.SNo}</p>
            <p>Task: {todo.Task}</p>
            <p>Urgency: {todo.Urgency}</p>
            <button onClick={() => updateUser(todo.id, todo.Urgency)} key={todo.id}>Update(Urgent/Not Urgent)</button>
            {/* <p> {console.log(todo.Urgency)}</p> */}
            <button onClick={() => deleteUser(todo.id)}>Delete</button>
            <br />
          </div>
        })}
      </div>
    </>
  );
}

export default App;
