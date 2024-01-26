import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';


const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory(); // Initialize the history object

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('username', email); // Use the email state variable
      formData.append('password', password); // Use the password state variable
      formData.append('grant_type', 'password');

      const response = await axios.post('https://apiv2stg.promilo.com/user/oauth/token', formData);

      console.log('Login API Response:', response);

      // Assuming the API returns an access token
      const accessToken = response.data.access_token;

      // Notify the parent component (App.js) about successful login
      onLoginSuccess(accessToken);

      // Redirect to another page upon successful login
      history.push('/dashboard'); // Change '/dashboard' to the desired route
    } catch (error) {
      console.error('Error in handleLogin:', error);
      // Handle login failure here
    }
  };

  return (
    <div className="login-container">
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
