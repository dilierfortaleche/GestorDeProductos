import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import api from "../api/api";

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Realizamos la solicitud al backend utilizando Axios
        try {
            const response = await api.post('http://localhost:5000/api/User/login', { email, password }, {withCredentials: true} );  // Usamos la ruta '/login' del backend

            if (response.status === 200) {
                // Si la respuesta es exitosa, guardamos el token en el localStorage
                localStorage.setItem('token', response.data.token);
                navigate('/Products'); // Redirigimos a otra página (ajusta la ruta según lo necesites)
            }
        } catch (error) {
            setError(error.response?.data?.message || 'Hubo un error al intentar iniciar sesión');
        }
    };

    return (
        <div className="d-flex justify-content-center align-items-center min-vh-100">
            <div className="card p-4" style={{ width: '400px' }}>
                <h2 className="text-center mb-4">Iniciar Sesión</h2>
                {error && <div className="alert alert-danger">{error}</div>}  {/* Mostramos el error si lo hay */}
                <form onSubmit={handleSubmit}>
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
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary w-100">Iniciar Sesión</button>
                    </div>
                </form>
                <div className="mt-3 text-center">
                    <p>No tienes cuenta? <Link to="/Register">Registrarse</Link></p>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;