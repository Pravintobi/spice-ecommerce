import React from 'react';
import { LoginForm } from '../components/Auth/LoginForm';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';

export function Login() {
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    try {
      // Send login request to the backend
      const response = await axios.post('http://localhost:8000/Login/loginuser', formData);
      console.log('Login response:', response.data);

      toast.success('Login successful!');
      const { token } = response.data;

      // Store token in localStorage or context (if needed)
      localStorage.setItem('authToken', token);

      // Navigate to the home page after login
      navigate('/');
    } catch (error) {
      console.error('Error during login:', error.response?.data || error.message);

      // Display appropriate error messages
      toast.error(error.response?.data?.message || 'An error occurred during login.');
    }
  };

  const handleToggleForm = () => {
    // Navigate to the registration page
    navigate('/register');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-16 px-4">
      <div className="max-w-md mx-auto">
        <LoginForm onSubmit={handleLogin} onToggleForm={handleToggleForm} />
      </div>
    </div>
  );
}
