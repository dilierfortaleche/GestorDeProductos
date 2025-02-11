import React from 'react';
import { useNavigate } from "react-router-dom";  // Importar el hook useNavigate

const Buttons = () => {
    const navigate = useNavigate();  // Usar el hook useNavigate

    const handleLoginClick = () => {
        navigate("./Login");
    };

    const handleRegisterClick = () => {
        navigate("./Register");
    };

    return (
        <main className="d-flex flex-column justify-content-center align-items-center min-vh-100 py-5">
            <h1 className="display-1 mt-3 fs-3 fw-bold">¡bienvenidos a mi gestor de productos por favor registrarse e inisiar sesion!</h1>
            <div className="text-center mt-4">
                <button className="btn btn-outline-primary me-3"
                onClick={handleLoginClick}>Iniciar Sesión</button>

                <button className="btn btn-outline-primary me-3"
                onClick={handleRegisterClick}>Registrarse</button>
            </div>
        </main>

    );
};

export default Buttons;