import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const validar = (e) => {
        e.preventDefault();

        if (!email.trim() || !password) {
            alert('Todos los campos son obligatorios');
            return;
        }

        if (password.length < 6) {
            alert('La contraseña debe tener al menos 6 caracteres.');
            return;
        }


        alert('Inicio de sesión exitoso!');
        navigate('/home'); 

        setEmail('');
        setPassword('');
    };

    return (
        <>
            <h2 className="mb-3 text-center">Login</h2>
            <div className='container-fluid'>
                <div className='container p-5'>
                    <form className="formulario m-5" onSubmit={validar}>
                        {error && <p className="text-danger">{error}</p>}

                        <div className="form-group m-4">
                            <label className="form-label">Email:</label>
                            <input
                                type="email"
                                name="email"
                                className="form-control"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>

                        <div className="form-group m-4">
                            <label className="form-label">Password:</label>
                            <input
                                type="password"
                                name="password"
                                className="form-control"
                                onChange={(e) => setPassword(e.target.value)}
                                value={password}
                            />
                        </div>
                        <div className='text-center'>
                        <button type="submit" className="btn btn-primary mt-4">
                            Login
                        </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;
