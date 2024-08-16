import { Button, TextInput } from 'flowbite-react';
import React, { useEffect, useState } from 'react';
import Resizer from 'react-image-file-resizer';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    beautyPreferences: '',
    subscription: '',
  });

  const [message, setMessage] = useState('');
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);

  useEffect(() => {
    // Fetch profile data from API
    const fetchProfile = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/profile');
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setProfileData({ ...profileData, [id]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      Resizer.imageFileResizer(
        file,
        300,
        300,
        'JPEG',
        70,
        0,
        (uri) => {
          setPhoto(uri);
          setPhotoPreview(URL.createObjectURL(file));
        },
        'base64'
      );
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('http://localhost:3000/api/v1/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...profileData, photo }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage('Profile updated successfully!');
      } else {
        setMessage(data.message);
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        <div className="flex-1">
          <Link to="/" className="font-bold dark:text-white text-4xl">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              F
            </span>
            <span className="text-black">Salon</span>
          </Link>
          <p className="text-sm mt-5">Update your profile information below.</p>
        </div>
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <TextInput
                type="text"
                placeholder="Enter your name"
                id="name"
                value={profileData.name}
                onChange={handleChange}
                required
                className="text-gray-900 placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <TextInput
                type="email"
                placeholder="Enter your email"
                id="email"
                value={profileData.email}
                onChange={handleChange}
                required
                className="text-gray-900 placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="beautyPreferences" className="block text-sm font-medium text-gray-700">Beauty Preferences</label>
              <TextInput
                type="text"
                placeholder="Enter your beauty preferences"
                id="beautyPreferences"
                value={profileData.beautyPreferences}
                onChange={handleChange}
                required
                className="text-gray-900 placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="subscription" className="block text-sm font-medium text-gray-700">Subscription</label>
              <TextInput
                type="text"
                placeholder="Enter your subscription details"
                id="subscription"
                value={profileData.subscription}
                onChange={handleChange}
                required
                className="text-gray-900 placeholder-gray-500"
              />
            </div>
            <div>
              <label htmlFor="photo" className="block text-sm font-medium text-gray-700">Profile Photo</label>
              <input
                type="file"
                id="photo"
                accept="image/*"
                onChange={handlePhotoChange}
                className="mt-1 block w-full text-gray-900 placeholder-gray-500"
              />
              {photoPreview && (
                <img src={photoPreview} alt="Profile Preview" className="mt-2 w-24 h-24 rounded-full" />
              )}
            </div>
            <Button gradientDuoTone="purpleToPink" type="submit">
              Update Profile
            </Button>
          </form>
          {message && <p className="mt-4 text-center text-red-500">{message}</p>}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;