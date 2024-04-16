import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LoginBox = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateX(100%);
  transition: transform 0.3s ease-out;
  z-index: 1000;

  &.open {
    transform: translateX(0);
  }
`;

const LoginFormWrapper = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 0.25rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column;
  width: 40rem;

  h2 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  label {
    font-size: 1.2rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  input[type="text"] {
    border: none;
    border-radius: 0.25rem;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    background-color: #f2f2f2;
    width: 100%;
  }

  button {
    padding: 0.5rem 1rem;
    background-color: #0369a0;
    color: white;
    border: none;
    border-radius: 0.25rem;
    font-size: 1.2rem;
    cursor: pointer;
    margin-top: 1rem;
  }

  p {
    font-size: 1.2rem;
    font-weight: 600;
    text-decoration: none;
    color: #0369a0;
    margin-top: 1rem;
    display: flex;
    justify-content: center;

    a {
      margin-left: 0.5rem;
    }
  }
`;

const Login = ({ onClose, isOpen }) => {
  const [regimentalNumber, setRegimentalNumber] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your validation logic here
    try {
      // Your authentication logic here
      onClose(); // Close the login modal upon successful login
      navigate("/alumni_dashboard");
    } catch (error) {
      setErrorMessage('Incorrect regimental number. Please try again.');
      setShowErrorPopup(true);
      console.error(error);
    }
  };

  const closeErrorPopup = () => {
    setShowErrorPopup(false);
  };

  return (
    <LoginBox onClick={onClose} className={isOpen ? 'open' : ''}>
      <LoginFormWrapper onClick={(e) => e.stopPropagation()}>
        <h2>Login</h2>
        <label htmlFor="regimentalNumber">Regimental Number</label>
        <input
          type="text"
          id="regimentalNumber"
          value={regimentalNumber}
          onChange={(e) => setRegimentalNumber(e.target.value)}
        />
        <button type="submit" onClick={handleSubmit}>Login</button>
      </LoginFormWrapper>
      {showErrorPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-md shadow-md">
            <p className="text-red-500 text-center">{errorMessage}</p>
            <button
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
              onClick={closeErrorPopup}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </LoginBox>
  );
};

export default Login;
