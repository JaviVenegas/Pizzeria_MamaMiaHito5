import { useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const validarDatos = (e) => {
        e.preventDefault();

        if (!email || !password) {
            alert('Todos los campos son obligatorios.');
            return;
        }

        if (password.length <= 6) {
            alert('La contraseña debe tener al menos 6 caracteres.');
            return; 
        }

        setError('');
        alert('Registro exitoso');
    };

    return (
        <>
        <div>
            <h2 className="mb-3 text-center">Registrar Usuario</h2>
            <form className="formulario m-5" onSubmit={validarDatos}>
                {error ? <p className="text-danger">{error}</p> : null}
                
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                < div className='text-center'>
                <button type="submit" className="btn btn-primary mt-4">Registrar</button>
                </div>
            </form>
        </div>
        </>
    );
}

export default Register;



