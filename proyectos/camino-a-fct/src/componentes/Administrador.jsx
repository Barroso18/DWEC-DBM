import React, { useState } from "react";
import "../estilos/menu.css";
import { Link } from 'react-router-dom';
import { useAuth } from '../Login/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Administrador =() =>{
    const { user, logout } = useAuth();
    if(user.administrador){
        return (
            <>
            Acceso permitido<br/>
            {user.nombre}
            </>
        );
    }else{
        return (
            <>
            Acceso denegado
            </>
        );
    }
}
export default Administrador;