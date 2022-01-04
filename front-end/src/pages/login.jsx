import React from 'react';

export default function Login() {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  const numberSix = 6;

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
  // const { email, setEmail } = useContext('email');
  // const { password, setPassword } = useContext('password');
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
          type="submit"
          disabled
        >
          LOGIN
        </button>
        <button
          data-testid="common_login__button-register"
          type="submit"
        >
          Ainda não tenho conta
        </button>
      </form>
    </div>
  );
}
