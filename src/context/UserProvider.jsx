import { useState } from 'react';
import { UserContext } from './UserContext';

export const UserProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState(null);

  // Login
  const login = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        return { success: true };
      } else {
        return { success: false, error: data.error || 'Error en login' };
      }
    } catch (error) {
      console.error('Error en login:', error);
      return { success: false, error: 'Error de conexión' };
    }
  };

  // Register
  const register = async (email, password) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setToken(data.token);
        setEmail(data.email);
        return { success: true };
      } else {
        return { success: false, error: data.error || 'Error en registro' };
      }
    } catch (error) {
      console.error('Error en register:', error);
      return { success: false, error: 'Error de conexión' };
    }
  };

  // Logout
  const logout = () => {
    setToken(null);
    setEmail(null);
  };

  // Get Profile
  const getProfile = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/me', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        setEmail(data.email);
        return { success: true, email: data.email };
      } else {
        return { success: false, error: data.error || 'Error obteniendo perfil' };
      }
    } catch (error) {
      console.error('Error en getProfile:', error);
      return { success: false, error: 'Error de conexión' };
    }
  };

  return (
    <UserContext.Provider 
      value={{ 
        token, 
        email, 
        login, 
        register, 
        logout,
        getProfile
      }}
    >
      {children}
    </UserContext.Provider>
  );
};