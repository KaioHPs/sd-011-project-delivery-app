import React, { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const numberSix = 6;

  useEffect(() => {
    const validateToken = async (token) => {
      const isValid = await axios.post('http://localhost:3001/token', { token })
        .then((r) => r.data.tokenIsValid);
      return isValid;
    };

    const getUser = async () => {
      const loggedUser = JSON.parse(window.localStorage.getItem('user'));
      if (loggedUser && loggedUser.token && await validateToken(loggedUser.token)) {
        navigate('/customer/products');
      }
    };
    getUser();

    function pageOnload() {
      const submitButton = document.getElementById('submitButton');
      submitButton.disabled = true;
    }
    pageOnload();
  }, [navigate]);

  function validUser(user) {
    if (user.role === 'customer') {
      window.location.href = '/customer/products';
    } else if (user.role === 'administrator') {
      window.location.href = '/admin/manage';
    } else if (user.role === 'seller') {
      window.location.href = '/seller/orders';
    }
  }

  function alertErrorElement() {
    const alert = document.getElementById('alertMessage');
    const cartHTML = '<div data-testid="common_login__element-invalid-email">';
    alert.innerHTML = `${cartHTML}<p>email ou senha invalidos</p></div>`;
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
    axios.post('http://localhost:3001/login', {
      email,
      password,
    })
      .then((r) => {
        window.localStorage
          .setItem('user', JSON.stringify(r.data));
        validUser(r.data);
      })
      .catch(() => {
        alertErrorElement();
      });
  }

  return (

    <div>
      <h1>login</h1>
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
          Ainda n??o tenho conta
        </button>
        <div id="alertMessage" />
      </form>
    </div>
  );
}
