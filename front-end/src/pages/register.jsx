// eslint-disable-next-line
import axios from 'axios';
import React, { useEffect, useState } from 'react';
// eslint-disable-next-line
import { useNavigate } from 'react-router-dom';
import validateRegister from '../helpers/validateRegister';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const validateValues = () => {
      const isValid = validateRegister({ name, email, password });
      setDisabled(isValid);
    };

    validateValues();
  }, [name, email, password]);

  const registUser = () => {
    axios.post('http://localhost:3001/register', {
      name, email, password,
    })
      .then((r) => {
        window.localStorage
          .setItem('user', JSON.stringify(r.data));
        navigate('/customer/products');
      })
      .catch(() => setInvalid(true));
  };

  return (
    <div>
      <h1>Cadastro</h1>
      <form>
        <label htmlFor="name">
          Name
          <input
            data-testid="common_register__input-name"
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
            data-testid="common_register__input-email"
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
            data-testid="common_register__input-password"
            type="password"
            placeholder="**********"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
        </label>
        <button
          data-testid="common_register__button-register"
          id="submitButton"
          type="button"
          disabled={ !disabled }
          onClick={ () => registUser() }
        >
          CADASTRAR
        </button>
      </form>
      { invalid
        && <p data-testid="common_register__element-invalid_register">invalid</p> }
    </div>
  );
}
