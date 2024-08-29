import React from 'react';
import { useHistory } from 'react-router-dom';
import Login from './login';

function UsuarioAdmin() {
    const history = useHistory();

    // Verificar si el usuario es admin
    if (localStorage.getItem('is_admin') !== 'true') {
        history.push('/login');
        return null;
    }

    return (
        <div>
            <h1>Admin Dashboard</h1>
            {/* Funcionalidades de admin */}
        </div>
    );
}

export default UsuarioAdmin;
