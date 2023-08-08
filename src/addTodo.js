import './App.css';
import React, { useState } from 'react';
import {
  Link,
  useNavigate
} from 'react-router-dom';
import { addTodo } from './addTodoRequest';
import { useDispatch } from 'react-redux';
const token = localStorage.getItem('token');

function AddToDo(props) {
  const dispatch = useDispatch()
  const [textToDo, setTextToDo] = useState('')
  // async function onAddTodo(e) {
  //   e.preventDefault()
  //   if (textToDo !== '') {
  //     addTodo(textToDo).then((response) => {
  //       props.fillTodos()
  //       setTextToDo('')
  //     });
  //   }
  // }

function onAddTodo(e){
  e.preventDefault()
  dispatch({type:'ADD_TODO', payload: {text:textToDo}})
}

  return <div>
    <form onSubmit={onAddTodo}>
      <input className='to-do-input' value={textToDo} onChange={(event) => setTextToDo(event.target.value)} placeholder='добавьте задачу' />
      <button type="submit" className='add'> добавить</button>
    </form>
  </div>
}


export default AddToDo;

