import React, { useState } from 'react'
import styled from 'styled-components'
import Login from './Login'

const SignUpBox = styled.div`
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
`

const SignUpForm = styled.form`
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

  input[type="email"],
  input[type="password"] {
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
`

const SignUp = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(false)

  const handleCloseClick = (event) => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      onClose();
      setIsLogin(true); // Switch to login when closing sign-up
    }
  }
  
  


  return (
    <SignUpBox onClick={handleCloseClick} className={isOpen ? 'open' : ''}>
      {isLogin ? (
        <Login onClose={handleCloseClick} setIsLogin={setIsLogin} /> // Pass setIsLogin to Login
      ) : (
        <SignUpForm>
          <h2>Sign Up</h2>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" />
          <label htmlFor="password">Your Password</label>
          <input type="password" id="password" />
          <button type="submit">Sign Up</button>
          <p>
            Need to Login? <a href="#" onClick={() => setIsLogin(true)}>Login</a>
          </p>
        </SignUpForm>
      )}
    </SignUpBox>
  )
}

export default SignUp
