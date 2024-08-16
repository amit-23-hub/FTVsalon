import { Button, FileInput, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';

const Profile = () => {
  const [formData, setFormData] = useState({
    personalInfo: '',
    beautyPreferences: '',
    subscription: '',
    photo: null,
  });
  const [message, setMessage] = useState('');
  const [isUpdating, setIsUpdating] = useState(false);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/profile/me', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          },
        });

        if (response.ok) {
          const profile = await response.json();
          setFormData({
            personalInfo: profile.personalInfo,
            beautyPreferences: profile.beautyPreferences,
            subscription: profile.subscription,
            photo: null
          });
          setIsUpdating(true);
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({ ...formData, photo: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.id]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    formDataToSend.append('personalInfo', formData.personalInfo);
    formDataToSend.append('beautyPreferences', formData.beautyPreferences);
    formDataToSend.append('subscription', formData.subscription);
    if (formData.photo) {
      formDataToSend.append('photo', formData.photo);
    }

    try {
      const response = await fetch(`http://localhost:3000/api/v1/profile/${isUpdating ? 'update' : 'create'}`, {
        method: isUpdating ? 'PUT' : 'POST',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: formDataToSend,
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(`Profile ${isUpdating ? 'updated' : 'created'} successfully!`);
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className='min-h-screen mt-20'>
      <div className='flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        <div className='flex-1'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="personalInfo" className='block text-sm font-medium text-gray-700'>Personal Info</label>
              <TextInput
                type='text'
                placeholder='Enter personal info'
                id='personalInfo'
                value={formData.personalInfo}
                onChange={handleChange}
                className='text-gray-900 placeholder-gray-500'
                required
              />
            </div>
            <div>
              <label htmlFor="beautyPreferences" className='block text-sm font-medium text-gray-700'>Beauty Preferences</label>
              <TextInput
                type='text'
                placeholder='Enter beauty preferences'
                id='beautyPreferences'
                value={formData.beautyPreferences}
                onChange={handleChange}
                className='text-gray-900 placeholder-gray-500'
                required
              />
            </div>
            <div>
              <label htmlFor="subscription" className='block text-sm font-medium text-gray-700'>Subscription</label>
              <TextInput
                type='text'
                placeholder='Enter subscription details'
                id='subscription'
                value={formData.subscription}
                onChange={handleChange}
                className='text-gray-900 placeholder-gray-500'
                required
              />
            </div>
            <div>
              <label htmlFor="photo" className='block text-sm font-medium text-gray-700'>Photo</label>
              <FileInput
                id="photo"
                onChange={handleChange}
                accept='image/*'
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
              {isUpdating ? 'Update Profile' : 'Create Profile'}
            </Button>
          </form>
          {message && <p className='mt-4 text-center text-red-500'>{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default Profile;
