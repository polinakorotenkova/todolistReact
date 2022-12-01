import './App.css';
import React, {useState} from 'react';
import {
  useNavigate
} from "react-router-dom";

function LogOut(){
  let navigate = useNavigate();

  function logOut() {
    console.log(1)
  localStorage.removeItem('token');
  navigate("/login");
  }

  return(
    <button className="log-out" onClick={logOut}> Выйти </button>
  )


}
export default LogOut