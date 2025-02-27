import React from 'react';
import { RegisterForm } from '../components/Auth/RegisterForm';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import axios from 'axios';

export function Register() {
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    try {
      const response = await axios.post('http://localhost:8000/Login/createuser', formData);
      console.log('Register response:', response.data);
      toast.success('Registration successful!');
      navigate('/login');
    } catch (error) {
      console.error('Error during registration:', error.response?.data || error.message);
      toast.error(error.response?.data?.message || 'An error occurred during registration.');
    }
  };

  const handleToggleForm = () => {
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 py-16 px-4">
      <div className="max-w-md mx-auto">
        <RegisterForm onSubmit={handleRegister} onToggleForm={handleToggleForm} />
      </div>
    </div>
  );
}
