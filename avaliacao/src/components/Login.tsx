import React, { useState } from 'react';
import '../styles/styles.css'; 

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    if (user && user.email === email && user.password === password) {
      alert('Login realizado com sucesso!');
    } else {
      alert('Email ou senha incorretos.');
    }
  };

  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e: { target: { value: any; }; }) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Senha:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
