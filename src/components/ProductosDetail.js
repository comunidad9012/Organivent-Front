import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

function ProductosDetail() {
  const API_URL = process.env.NODE_ENV === 'production' ? 'http://localhost:5001' : 'http://backend:5000';
  const [Productos, setProductos] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch(`${API_URL}/Productos/viewProductos/${id}`)
      .then(response => response.json())
      .then(data => setProductos(data))
      .catch(error => console.error('Error fetching data:', error));
  }, [id,API_URL]);

  return (
    <div>
      <Helmet>
        <title>{Productos.nombre_producto || 'Cargando producto...'}</title>
      </Helmet>
      {/* corregir el nombre */}

      <h1>{Productos.nombre_producto}</h1>
      <div dangerouslySetInnerHTML={{ __html: Productos.nombre_producto }} />
      {/* ver si se puede solo usar <div>{Productos.nombre_producto}</div> */}
    </div>
  );
}

export default ProductosDetail;
