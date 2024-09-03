// App.js
import React from 'react';
import Navbar1 from './components/Navbar1'; // Make sure the path is correct
import Content from './components/Content'; // Make sure the path is correct
import Content2 from './components/Content2'; // Make sure the path is correct
import Footer1 from './components/Footer1'; // Import the Footer component

const App = () => {
  return (
    <div>
      <Navbar1 />
      <Content />
      <Content2 />
      <Footer1 /> {/* Add the Footer component here */}
    </div>
  );
};

export default App;
