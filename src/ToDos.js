import './App.css';
import React, {useEffect, useState} from 'react';
import AddToDo from './AddToDo';
import LogOut from './LogOut';
import ToDo from './ToDo';
import { getToDos } from './getTodos';
import { useDispatch, useSelector } from 'react-redux';

function ToDos(){
  const toDos = useSelector(state => state.toDos)
  const dispatch = useDispatch()
 

  const fillTodos = () => {
    getToDos().then((value)=>{
      dispatch ({type: 'FILL_TODOS', payload:value})
    })
  }


//  const [todos, setTodos] = useState([])
  useEffect(()=>{
   fillTodos()
  },[])
   return (
    <div className='center'>
    <h1>Список дел</h1>


    <div>
      <AddToDo  />
      {toDos.map((todo, index)=>{
        return <ToDo key={todo.id} toDo={todo} index={index} />
      })}

       <LogOut />
    </div>
    </div>
  )
}

export default ToDos