import React from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const numberSix = 6;

  window.onload = function pageOnload() {
    const submitButton = document.getElementById('submitButton');
    submitButton.disabled = true;
  };

  function validUser() {
    window.location.href = '/customer/products';
  }

  function alertErrorElement(error) {
    const alert = document.getElementById('alertMessage');
    const cartHTML = '<div data-testid="common_login__element-invalid-email">';
    alert.innerHTML = `${cartHTML}<p>${error}</p></div>`;
  }

  function submitLock() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const submitButton = document.getElementById('submitButton');
    if (emailRegex.test(email) === true && password.length >= numberSix) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  async function submitToApi() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    Axios.post('http://localhost:3001/login', {
      email,
      password,
    })
      .then(() => {
        validUser();
      })
      .catch((error) => {
        console.log(error);
        alertErrorElement(error);
      });
  }

  return (

    <div>
      <form>
        <input
          data-testid="common_login__input-email"
          id="email"
          type="text"
          placeholder="Email"
          onChange={ () => submitLock() }
        />
        <input
          id="password"
          data-testid="common_login__input-password"
          type="password"
          placeholder="Password"
          onChange={ () => submitLock() }
        />
        <button
          data-testid="common_login__button-login"
          id="submitButton"
          type="button"
          onClick={ () => submitToApi() }
        >
          LOGIN
        </button>
        <button
          data-testid="common_login__button-register"
          type="button"
          onClick={ () => navigate('/register') }
        >
          Ainda não tenho conta
        </button>
        <div id="alertMessage" />
      </form>
    </div>
  );
}
