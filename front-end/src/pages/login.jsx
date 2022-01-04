import React from 'react';

export default function Login() {
  function getEmail() {
    return document.getElementById('email').value;
  }

  // const { email, setEmail } = useContext('email');
  // const { password, setPassword } = useContext('password');
  return (
    <div>
      <form>
        <input
          data-testid="1"
          id="email"
          type="text"
          placeholder="Email"
          onChange={ () => getEmail() }
        />
        <input data-testid="2" type="password" placeholder="Password" />
        <button data-testid="3" type="submit" disabled>LOGIN</button>
        <button data-testid="4" type="submit">Ainda não tenho conta</button>
      </form>
    </div>
  );
}
