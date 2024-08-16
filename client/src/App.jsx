import 'flowbite/dist/flowbite.css';
import React from 'react';
import MissionAndGoal from './pages/MissionAndGoal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Dashaboard from './pages/Dashaboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Profile from './pages/Profile';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import About from './pages/about';
import Blog from './pages/Blog';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/blog" element={<Blog/>}></Route>
        <Route path='/sign-in' element={<Signin />} />
        <Route path='/sign-up' element={<Signup />} />
        <Route path='/dashboard' element={<Dashaboard />} />
        <Route path="/profile" element={<Profile />} />

        <Route path='login' element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/mission-and-goal" element={<MissionAndGoal />} />


      </Routes>

    </BrowserRouter>
  )
}