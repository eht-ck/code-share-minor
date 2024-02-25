import React, { useState } from 'react';
import { auth } from '../firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import Navbar2 from '../components/navbar/Navbar2';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email.endsWith('@nitj.ac.in')) {
      setErrorMessage('Only emails with @nitj.ac.in domain are allowed.');
      setShowErrorPopup(true);
      return;
    }
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      console.log(userCredential);
      const user = userCredential.user;
      localStorage.setItem('token', user.accessToken);
      localStorage.setItem('user', JSON.stringify(user));
      navigate("/home");
    } catch (error) {
      setErrorMessage('Incorrect email or password. Please try again.');
      setShowErrorPopup(true);
      console.error(error);
    }
  }

  const closeErrorPopup = () => {
    setShowErrorPopup(false);
  };

  return (
    <>
      <Navbar2 />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
          <h1 className="text-2xl font-semibold mb-6 text-center">ADMIN LOGIN</h1>
          <form onSubmit={handleSubmit} className='login-form'>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                placeholder="Your Password"
                required
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className='w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300'
            >
              Login
            </button>
          </form>{/*
          <p className="mt-4 text-sm text-gray-600 text-center">
            Need to Signup? <Link to="/signup" className="text-blue-500">Create Account</Link>
          </p>*/}
        </div>
      </div>
      {showErrorPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <p className="text-red-500 text-center">{errorMessage}</p>
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300" onClick={closeErrorPopup}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Login;
