import { useState } from 'react';
import PropTypes from 'prop-types';

const Login = ({ handleLogin }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        if (!email || !password) {
            setError('Email and password are required!');
            return;
        }
        handleLogin(email, password);
        setEmail('');
        setPassword('');
        setError('');
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center bg-gray-100">
            <div className="border-2 rounded-xl border-emerald-600 bg-white shadow-lg p-10">
                <h1 className="text-2xl font-bold text-emerald-600 mb-6 text-center">Login</h1>
                <form
                    onSubmit={submitHandler}
                    className="flex flex-col items-center justify-center space-y-4"
                >
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="text-black outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400"
                        type="email"
                        placeholder="Enter your email"
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="text-black outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400"
                        type="password"
                        placeholder="Enter password"
                    />
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    <button
                        className="mt-5 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full"
                        type="submit"
                    >
                        Log in
                    </button>
                </form>
                <div className="mt-8 text-center">
                    <p className="text-gray-700 font-medium">Backend is not developed for this project.</p>
                    <p className="text-gray-600 mt-2">
                        <span className="font-semibold">Admin Dashboard:</span> Login with
                        <br />
                        <span className="text-emerald-600">admin@example.com</span> and password <span className="text-emerald-600">123 for</span>
                    </p>
                    <p className="text-gray-600 mt-4">
                        <span className="font-semibold">Employee Dashboard:</span> Login with
                        <br />
                        <span className="text-emerald-600">employee5@example.com</span> and password <span className="text-emerald-600">123</span>
                    </p>
                </div>
            </div>
        </div>
    );
};

Login.propTypes = {
    handleLogin: PropTypes.func.isRequired,
};

export default Login;
