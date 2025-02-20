import React, { createContext, useContext, useState } from 'react';
// createContext => Se usa para crear un contexto, que nos permitirá compartir información de autenticación entre distintos componentes.
// useContext => Permite acceder al contexto desde cualquier componente.


//Se crea el contexto AuthContext, que almacenará la información de autenticación (usuario, login, logout).
const AuthContext = createContext();


// AuthProvider es un componente proveedor que envolverá a otros componentes y les permitirá acceder al contexto.
export const AuthProvider = ({ children }) => {
  //const [user, setUser] = useState(null);
  const [user, setUser] = useState(()=>{
    //Recuperar usuario desde localStorage si existe
    return localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')):null;
  });
  //const login = (userData) => setUser(userData);
  const login = (userData,recordarSesion) => {
    setUser(userData);
      localStorage.setItem('user',JSON.stringify(userData));
    /*if(recordarSesion){
      console.log("recordara Sesion");
      setUser(userData);
      localStorage.setItem('user',JSON.stringify(userData));
    }else{
      console.log("no recordara Sesion");
      setUser(userData);
    }*/
    
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

//es un custom hook que facilita el acceso al contexto de autenticación.
export const useAuth = () => useContext(AuthContext);
