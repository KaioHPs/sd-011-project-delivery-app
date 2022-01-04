import React, { useEffect, useState } from 'react';
import validateRegister from '../helpers/validateRegister';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const validateValues = () => {
      const isValid = validateRegister({ name, email, password });
      console.log(isValid);
      setDisabled(isValid);
    };

    validateValues();
  }, [name, email, password]);

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
          type="submit"
          disabled={ !disabled }
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}
