import { Button, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [formData, setFormData] = useState({ username: '', email: '', password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('http://localhost:3000/api/v1/auth/sign-up', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || `Error: ${res.status}`);
      }

      setMessage('Sign up successful');
      setTimeout(() => {
        navigate('/sign-in');
      }, 2000);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
          <Link to='/' className='font-bold dark:text-white text-4xl'>
            <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>
              F
            </span>
            Salon
          </Link>
          <p className='text-sm mt-5'>Sign up to access our services.</p>
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className='block text-sm font-medium text-gray-700'>Your username</label>
              <TextInput type='text' placeholder='username' id='username' onChange={handleChange} value={formData.username} className='text-gray-900 placeholder-gray-500' required/>
            </div>
            <div>
              <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Your email</label>
              <TextInput type='email' placeholder='email' id='email' onChange={handleChange} value={formData.email} className='text-gray-900 placeholder-gray-500' required/>
            </div>
            <div>
              <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Your password</label>
              <TextInput type='password' placeholder='password' id='password' onChange={handleChange} value={formData.password} className='text-gray-900 placeholder-gray-500' required/>
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign Up
            </Button>
          </form>
          {message && <p className='mt-4 text-center text-red-500'>{message}</p>}
          <div className='flex gap-2 text-sm mt-5'>
            <span>Have an account?</span>
            <Link to='/sign-in' className='text-blue-500'>Sign in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
