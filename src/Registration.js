import './App.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

function Registration() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  function registrationUser() {
    fetch('http://127.0.0.1:2000/registration', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        email: login,
        password,
      }),
    }).then((response) => {
      response.json().then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          window.location.href = './index';
        }
      });
    });
  }

  return (
    <div className="vhod">
      <input value={login} onChange={(event)=>{setLogin(event.target.value)}} type="text" className="login" placeholder="введите логин" /><br />
      <input value={password} onChange={(event)=>{setPassword(event.target.value)}} type="password"className="password" placeholder="введите пароль" /><br />
      <input value={name} onChange={(event)=>{setName(event.target.value)}} type="text"className="name" placeholder="введите имя" /><br />

      <button className="button-registration" onClick={registrationUser}> Зарегистрироваться </button>
      <br />
        <Link className="registration-link" to={'/login'}> Войти в существующий аккаунт</Link>
      <br />
    </div>
  
  );
}

export default Registration;