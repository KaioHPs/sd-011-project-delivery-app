import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CustomerNavbar from '../components/CustomerNavbar';
import validateRegister from '../helpers/validateRegister';

export default function Admin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [disabled, setDisabled] = useState(false);
  const [user, setUser] = useState({ name: '' });
  const [invalid, setInvalid] = useState(false);

  useEffect(() => {
    const validateValues = () => {
      const isValid = validateRegister({ name, email, password });
      setDisabled(isValid);
    };

    const getUser = async () => {
      const loggedUser = JSON.parse(window.localStorage.getItem('user'));
      if (loggedUser && loggedUser.token) {
        setUser(loggedUser);
      } else {
        window.location.href = '/login';
      }
    };

    getUser();
    validateValues();
  }, [name, email, password]);

  const registUser = () => {
    axios.post('http://localhost:3001/register', {
      name, email, password, role,
    }, {
      headers: {
        authorization: user.token,
      },
    })
      .catch(() => setInvalid(true));
  };

  return (
    <div>
      <CustomerNavbar name="Tryber Admin" />
      <h1>Cadastrar novo usuário</h1>
      <form>
        <label htmlFor="name">
          Name
          <input
            data-testid="admin_manage__input-name"
            id="name"
            type="text"
            placeholder="Seu nome"
            value={ name }
            onChange={ ({ target }) => setName(target.value) }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            data-testid="admin_manage__input-email"
            id="email"
            type="text"
            placeholder="Seu email"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            id="password"
            data-testid="admin_manage__input-password"
            type="password"
            placeholder="**********"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <label htmlFor="role">
          Tipo
          <select
            data-testid="admin_manage__select-role"
            id="role"
            value={ role }
            onChange={ ({ target }) => setRole(target.value) }
          >
            <option value="seller">Vendedor</option>
            <option value="administrator">Administrador</option>
            <option value="customer">Comprador</option>
          </select>
        </label>
        <button
          data-testid="admin_manage__button-register"
          id="submitButton"
          type="button"
          disabled={ !disabled }
          onClick={ () => registUser() }
        >
          CADASTRAR
        </button>
      </form>
      { invalid
        && <p data-testid="admin_manage__element-invalid-register">invalido</p> }
    </div>
  );
}
