import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Categorias() {
    const API_URL = process.env.NODE_ENV === 'production' ? 'http://localhost:5001' : 'http://backend:5000';
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch(`${API_URL}/Categoria/showCategorias`) // Esta ruta es la ruta al endpoint
            .then((response) => response.json())
            .then((data) => setCategorias(data))
            .catch((error) => console.error('Error fetching categories:', error));
    }, [API_URL]); // Añadir API_URL como dependencia para asegurarse que use la correcta, solo se usa en useEffect

    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Categorías
            </a>
            <ul className="dropdown-menu">
                {categorias.map((categoria) => (
                    <li key={categoria._id}>
                        <Link className="dropdown-item" to={`/Productos?categoria=${categoria._id}`}>
                            {categoria.nombre_categoria}
                        </Link>
                    </li>
                ))}
            </ul>
        </li>
    );
}

export default Categorias;
