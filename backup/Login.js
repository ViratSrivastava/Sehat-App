// Login.js
import React from 'react';
import { View, Text } from 'react-native';
import { auth, googleProvider } from '../firebase/firebaseConfig';

const Login = () => {
  const handleLoginWithEmailPassword = () => {
    // Implement email/password login with Firebase
  };

  const handleLoginWithGoogle = () => {
    auth.signInWithPopup(googleProvider)
      .then((result) => {
        // Handle successful Google login
      })
      .catch((error) => {
        // Handle errors
      });
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLoginWithEmailPassword}>Login with Email/Password</button>
      <button onClick={handleLoginWithGoogle}>Login with Google</button>
    </div>
  );
};

export default Login;
