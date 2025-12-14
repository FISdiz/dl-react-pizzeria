import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validación: Todos los campos son obligatorios
    if (!email || !password) {
      alert('Todos los campos son obligatorios');
      return;
    }

    // Validación: Password debe tener al menos 6 caracteres
    if (password.length < 6) {
      alert('El password debe tener al menos 6 caracteres');
      return;
    }

    // Si todo es correcto
    alert('Authentication successful!');
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;