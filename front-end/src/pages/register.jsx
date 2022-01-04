import React, { useState } from 'react';

export default function Register() {
  
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	//
  return (
    <div>
			<h1>Cadastro</h1>
      <form>
				<label>
					Name
					<input
						data-testid="common_register__input-name"
						id="name"
						type="text"
						placeholder="Seu nome"
						value={name}
						onChange={ ({target}) =>  setName(target.value)}
					/>
				</label>
				<label>
					Email
					<input
						data-testid="common_register__input-email"
						id="email"
						type="text"
						placeholder="Seu email"
						value={email}
						onChange={ ({target}) =>  setEmail(target.value)}
					/>
				</label>
				<label>
					Senha
					<input
						id="password"
						data-testid="common_register__input-password"
						type="password"
						placeholder="**********"
						value={password}
						onChange={ ({target}) => setPassword(target.value)}
					/>
				</label>
        <button
          data-testid="common_register__button-register"
          id="submitButton"
          type="submit"
          disabled
        >
          CADASTRAR
        </button>
      </form>
    </div>
  );
}
