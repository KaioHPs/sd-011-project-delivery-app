import React from 'react'
import axios from 'axios';
export default function login() {

  
  return (
    <div>
      <h1>Login</h1>
      <form>
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button type="submit">Login</button>
      </form>
    </div>
  )
}
