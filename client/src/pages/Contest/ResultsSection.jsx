import React from 'react';
import { motion } from 'framer-motion';

const results = [
    { title: 'Miss Universe 2024', description: 'Awarded to the most exceptional contestant for her outstanding performance, elegance, and charisma.', image: '/src/assets/result1.jpeg' },
    { title: 'Best Talent Performance', description: 'Recognized for the most impressive talent showcase that captivated the judges and audience alike.', image: '/src/assets/result2.jpeg' },
  ];

const ResultsSection = ({ searchQuery }) => {
  const filteredResults = results.filter(result =>
    result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    result.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="results" className="py-10 bg-gray-100">
      <h2 className="text-4xl font-bold text-center mb-8">Results</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {filteredResults.map((result, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 shadow-lg rounded-lg transition-transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-full h-64 md:h-96 lg:h-128 overflow-hidden relative">
              <img src={result.image} alt={result.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mt-4">{result.title}</h3>
            <p className="mt-2 text-gray-600">{result.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ResultsSection;
