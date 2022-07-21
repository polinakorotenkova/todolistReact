import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="vhod">
      <input type="text" className="login" placeholder="введите логин" /><br />
      <input type="text"className="password" placeholder="введите пароль" /><br />
      <button className="buttonLogin"> Войти </button>
      <br />
        <a className="registrationLink" href="./registration.html">Зарегистрироваться</a>
      <br />
    </div>
  );
}

export default App;
