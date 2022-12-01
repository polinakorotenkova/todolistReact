import './App.css';
import React, {useState} from 'react';
import { Link,
  useNavigate } from 'react-router-dom';
const token = localStorage.getItem('token');


function AddToDo(){

  async function addToDo(e) {
  e.preventDefault()
  const textToDo = document.querySelector('input').value;
  if (textToDo !== '') {
    return fetch('http://127.0.0.1:2000/addtodos', {
      method: 'post',
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ isDone: false, text: textToDo }),
    }).then((response) => {
      document.querySelector('input').value = '';
    });
  }
}

  return <div>
  <form onSubmit={addToDo}>
    <input className='to-do-input' placeholder='добавьте задачу'/>
    <button  type="submit" className='add'> добавить</button>
  </form>
</div>
}


export default AddToDo;

