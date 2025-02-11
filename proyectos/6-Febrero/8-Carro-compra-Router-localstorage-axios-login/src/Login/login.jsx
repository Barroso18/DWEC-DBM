import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import ServicioUsuario from '../servicios/ServicioUsuario';
import bcrypt from 'bcryptjs';
// import axios from 'axios';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const [encryptedPassword, setEncryptedPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const cifrarPassword = () => {
    // Sal (coste de encriptación), el valor 10 es un valor común
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    setEncryptedPassword(hash);
    console.log(hash);
  };

  const handleSubmit = async (e) => {
  
    e.preventDefault();
    handleEncryptPassword();
    // ServicioUsuario.login(usuario,password)
    ServicioUsuario.login(usuario,encryptedPassword)
      .then((response) => {
       if(response.data.length !== 0 ){        
        login(response.data[0].nombre,response.data[0].pass);
        navigate('/'); 
       }else {
        
        setError("Usuario no es correcto")
       }
       
        
      })
      .catch((error) => {   
        alert(error)                 
       navigate('/login'); 
      });    
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Usuario</label>
          <input
            type="text"
            value={usuario}
            onChange={(e) => setUsuario(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          {/*
            <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
          */}
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
