import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Productos from './Productos';
import ProductosDetail from './ProductosDetail';
import CreateProducto from './CreateProductos'; // Cambiado a PascalCase
import SearchForm from './SearchForm';
import '../styles/index.css'; // Asegúrate de que esta ruta sea correcta
import CreateClient from './CreateClient';
import 'bootstrap/dist/js/bootstrap.bundle.min';

function Navbar() {
    const location = useLocation(); // Obtener la ubicación actual
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/Categoria/showCategorias') // Ruta al endpoint que devuelve las categorías
            .then((response) => response.json())
            .then((data) => setCategorias(data))
            .catch((error) => console.error('Error fetching categories:', error));
    }, []);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
            {location.pathname !== '/' && (
                <Link className="navbar-brand fancy" to="/">
                    {/* Inicio */}
                    <span className="top-key"></span>
                    <span className="text">Inicio</span>
                    <span className="bottom-key-1"></span>
                    <span className="bottom-key-2"></span>
                </Link>
            )}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {location.pathname === '/' && (
                            <Link className="navbar-brand fancy" to="/createClient">
                                {/* Crear cuenta */}
                                <span className="top-key"></span>
                                <span className="text">Crear cuenta</span>
                                <span className="bottom-key-1"></span>
                                <span className="bottom-key-2"></span>
                            </Link>
                        )}
                        {location.pathname !== '/Productos/editor' && (
                            <li className="nav-item">
                                <Link className="nav-link active fancy" aria-current="page" to="/Productos/editor">
                                    {/* Añadir producto */}
                                    <span className="top-key"></span>
                                    <span className="text">Añadir producto</span>
                                    <span className="bottom-key-1"></span>
                                    <span className="bottom-key-2"></span>
                                </Link>
                            </li>
                        )}
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
                    </ul>
                    <SearchForm />
                    {/* Encontrar la forma de pasar el json a otro componente */}
                </div>
            </div>
        </nav>
    );
}

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Productos />} />
                <Route path='/Productos/viewproduct/:id' element={<ProductosDetail />} />
                <Route path='/Productos/editor' element={<CreateProducto />} /> 
                <Route path='/createClient' element={<CreateClient />} />
            </Routes>
        </Router>
    );
}

export default App;
