import { useState } from 'react';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // campos obligatorios
    if (!email || !password || !confirmPassword) {
      alert('Todos los campos son obligatorios');
      return;
    }

    // password minimo 6 caracteres
    if (password.length < 6) {
      alert('El password debe tener al menos 6 caracteres');
      return;
    }

    // confirmacion de password
    if (password !== confirmPassword) {
      alert('El password y la confirmación deben ser iguales');
      return;
    }

    alert('Registro exitoso!');
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        
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

        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;