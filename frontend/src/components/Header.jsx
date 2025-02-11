import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importamos useNavigate

const Header = () => {
    const navigate = useNavigate(); // Definimos navigate correctamente

    const handleHomeClick = () => {
        navigate("/"); // Redirige a la página de inicio ("/")
    };

    return (
        <header className="bg-dark text-white p-4 d-flex align-items-center justify-content-between w-100 fixed-top z-10 header-height">
    {/* Botón de inicio alineado a la izquierda */}
    <button 
        className="btn btn-primary fw-bold px-4 py-2" 
        onClick={handleHomeClick}
    >
        Inicio
    </button>

    {/* Contenedor relativo para posicionar el título en el centro */}
    <div className="position-absolute start-50 translate-middle-x">
        <h1 className="fw-bold text-center m-0">Gestor de productos</h1>
    </div>
        </header>


    );
};

export default Header;
