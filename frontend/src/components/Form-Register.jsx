import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from "../api/api";

const RegisterForm = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("Las contraseñas no coinciden.");
            return;
        }

        try {
            const response = await api.post('http://localhost:5000/api/User/register', { nombre, email, password } );

            if (response.status === 201) {
                setSuccess("Registro exitoso. Redirigiendo...");
                setTimeout(() => navigate('/login'), 2000); // Redirige tras 2 segundos
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Hubo un error al intentar registrarse.');
        }
    };

    return (
        <div className="container d-flex align-items-center justify-content-center" style={{ minHeight: 'calc(100vh - 150px)', marginTop: '80px', marginBottom: '70px' }}>
        <div className="card p-4 shadow" style={{ width: '400px' }}>
            <h2 className="text-center mb-4">Registrarse</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input
                        type="text"
                        id="nombre"
                        className="form-control"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Correo Electrónico</label>
                    <input
                        type="email"
                        id="email"
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Contraseña</label>
                    <input
                        type="password"
                        id="password"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="confirmPassword" className="form-label">Confirmar Contraseña</label>
                    <input
                        type="password"
                        id="confirmPassword"
                        className="form-control"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                </div>
                <div className="text-center">
                    <button type="submit" className="btn btn-primary w-100">Registrarse</button>
                </div>
            </form>
            <div className="mt-3 text-center">
                <p>¿Ya tienes cuenta? <Link to="/login">Iniciar sesión</Link></p>
            </div>
        </div>
    </div>
    
    );
};

export default RegisterForm;
