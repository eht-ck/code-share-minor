import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";

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
      cursor: pointer;
      color: #0369a0;
      text-decoration: underline;
    }
  }
`;

const Login = ({ onClose, isOpen }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorPopup, setShowErrorPopup] = useState(false);
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Your validation logic here
    try {
      // Your authentication logic here using email and password
      onClose(); // Close the login modal upon successful login
      navigate("/alumni_dashboard");
    } catch (error) {
      setErrorMessage("Incorrect email or password. Please try again.");
      setShowErrorPopup(true);
      console.error(error);
    }
  };

  const handleForgotPassword = () => {
    setIsForgotPassword(true);
  };

  const closeErrorPopup = () => {
    setShowErrorPopup(false);
  };

  const handleSignUpClick = () => {
    setIsSignUpOpen(true);
  };

  const handleCloseSignUp = () => {
    setIsSignUpOpen(false);
  };

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    // Implement logic for handling forgot password with the provided email
    // For example, send a password reset link to the provided email
    setIsForgotPassword(false); // Close the forgot password form
  };

  return (
    <>
      <LoginBox onClick={onClose} className={isOpen ? "open" : ""}>
        <LoginFormWrapper onClick={(e) => e.stopPropagation()}>
          <h2>{isForgotPassword ? "Forgot Password" : "Login"}</h2>
          {isForgotPassword ? (
            <>
              <p></p>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button onClick={handleEmailSubmit}>Submit</button>
            </>
          ) : (
            <>
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" onClick={handleSubmit}>
                Login
              </button>
              <p>
                <a onClick={handleForgotPassword}>Forgot Password?</a>
              </p>
              <p>
                Don't have an account?{" "}
                <a onClick={handleSignUpClick}>Sign Up</a>
              </p>
            </>
          )}
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
      {isSignUpOpen && (
        <SignUp onClose={handleCloseSignUp} isOpen={isSignUpOpen} />
      )}
    </>
  );
};

export default Login;
