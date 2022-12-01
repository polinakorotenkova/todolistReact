import './App.css';
import React, {useState} from 'react';
import { Link,
  useNavigate } from 'react-router-dom';

function Login() {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  let navigate = useNavigate()

  function loginUser(){
    fetch('http://127.0.0.1:2000/login', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: login,
        password
      }),
    }).then((response) => {
      response.json().then((data) => {
        if (data.token) {
          localStorage.setItem('token', data.token);
          navigate("/index")
        } else {
          console.log(1);
        }
      });
    });
  }

  return (
    <div className="vhod">
      <input value={login} onChange={(event)=>{setLogin(event.target.value)}} type="text" className="login" placeholder="введите логин" /><br />
      <input value={password} onChange={(event)=>{setPassword(event.target.value)}} type="password"className="password" placeholder="введите пароль" /><br />
      <button className="button-login" onClick={loginUser}> Войти </button>
      <br />
        <Link className="registration-link" to={'/registration'}>Зарегистрироваться</Link>
      <br />
    </div>
  
  );
}

export default Login;