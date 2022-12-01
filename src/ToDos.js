import './App.css';
import React, {useEffect, useState} from 'react';
import AddToDo from './Add';
import LogOut from './LogOut';
import ToDo from './ToDo';
import { getToDos } from './getToDos';

function ToDos(){
  const fillTodos = () => {
    getToDos().then(function(value){
      setTodos(value)
    })
  }
  const [todos, setTodos] = useState([])
  useEffect(()=>{
   fillTodos()
  },[])
   return (
    <div className='center'>
    <h1>Список дел</h1>


    <div>
      <AddToDo fillTodos={fillTodos} />
      {todos.map((todo)=>{
        return <ToDo key={todo.id} toDo={todo} fillTodos={fillTodos} />
      })}

       <LogOut />
    </div>
    </div>
  )
}

export default ToDos