import React, { useState, useEffect } from 'react';
import { Link } from'react-router-dom';

function Categorias(){
    const [categorias, setCategorias] = useState([]);

        useEffect(() => {
            fetch('http://localhost:5000/Categoria/showCategorias') // Ruta al endpoint que devuelve las categorías
                .then((response) => response.json())
                .then((data) => setCategorias(data)) 
                .catch((error) => console.error('Error fetching categories:', error));
        }, []);

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
        )
    }

export default Categorias