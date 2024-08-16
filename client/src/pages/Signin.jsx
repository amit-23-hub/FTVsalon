import { Button, TextInput } from 'flowbite-react';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('http://localhost:3000/api/v1/auth/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        localStorage.setItem('token', data.token); // Save token
        setMessage('Login successful!');
        navigate('/profile');
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
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
          <p className='text-sm mt-5'>Sign in to access your account.</p>
        </div>
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
              <TextInput
                type='email'
                placeholder='Enter your email'
                id='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='text-gray-900 placeholder-gray-500'
              />
            </div>
            <div>
              <label htmlFor="password" className='block text-sm font-medium text-gray-700'>Password</label>
              <TextInput
                type='password'
                placeholder='Enter your password'
                id='password'
                value={formData.password}
                onChange={handleChange}
                required
                className='text-gray-900 placeholder-gray-500'
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              Sign In
            </Button>
          </form>
          {message && <p className='mt-4 text-center text-red-500'>{message}</p>}
          <div className='flex gap-2 text-sm mt-5'>
            <span>Don't have an account?</span>
            <Link to='/sign-up' className='text-blue-500'>Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
