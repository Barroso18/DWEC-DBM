import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from './AuthProvider';
import ServicioUsuario from '../servicios/ServicioUsuario';
import bcrypt from 'bcryptjs';
// import axios from 'axios';

const Login = () => {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const [recordarSesion, setRecordarSesion] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();
  const [encryptedPassword, setEncryptedPassword] = useState('');
  const [notificaciones, setNotificaciones] = useState('');

  const cifrarPassword = () => {
    // Sal (coste de encriptación), el valor 10 es un valor común
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    setEncryptedPassword(hash);
    console.log(hash);
  };


  const handleSubmit = async (e) => {
  
    e.preventDefault();
    //form.
    cifrarPassword();
    ServicioUsuario.login(usuario,password)
      .then((response) => {
       if(response.data.length !== 0 ){  
        const usuario = response.data[0];
        const hashUsuario = usuario.pass;
        const recuerda = response.data[0].recordarSesion;
        const passwordCorrecta = bcrypt.compareSync(password,hashUsuario);
        if(passwordCorrecta){
          localStorage.setItem('notificaciones',JSON.stringify(response.data[0].notificaciones));
          //login(response.data[0].nombre);
          login(usuario,recuerda);
          navigate('/');
        }else{
          setError("COntraseña incorrecta");
        }      
         
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
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Recordar sesion:</label>
          <input 
            type='checkbox' 
            value={recordarSesion} 
            onChange={(e) => setRecordarSesion(e.target.value)}
            />
        </div>
        <div>
          <label>Permitir notificaciones:</label>
          <input 
            type='checkbox' 
            value={notificaciones} 
            onChange={(e) => setNotificaciones(e.target.value)}
            />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
