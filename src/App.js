// src/App.js
import React from 'react';
import Hero from './components/Hero';
import Header from './components/Header';
import Section from './components/Section'; // Import the new section
import NextSection from './components/NextSection';
import TextArea from './components/TextArea';
import ContactArea from './components/ContactArea';
function App() {
    return (
        <div>
            <Hero />
            <Header />
            <Section />
            <NextSection />
            <TextArea />
            <ContactArea /> {/* Add the new section here */}
        </div>
    );
}

export default App;