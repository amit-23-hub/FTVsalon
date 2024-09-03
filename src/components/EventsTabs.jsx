import  { useState } from 'react';
import { motion } from 'framer-motion';

const eventsData = {
    live: [
        { title: 'Grand Fashion Gala', description: 'Join us for an evening filled with elegance and high fashion as we showcase the latest trends and styles.', image: '/src/assets/event1.jpeg', link: '#' },
        { title: 'Beauty Queen Pageant', description: 'Watch the top contestants compete for the title of Beauty Queen in a grand celebration of beauty and grace.', image: '/src/assets/event2.jpeg', link: '#' },
      ],
      upcoming: [
        { title: 'Winter Wonderland Contest', description: 'Celebrate the winter season with our Winter Wonderland Contest featuring dazzling winter-themed beauty and fashion.', image: '/src/assets/event3.jpeg', link: '#' },
        { title: 'Summer Style Showdown', description: 'Prepare for a vibrant showcase of summer fashion trends and styles in our Summer Style Showdown.', image: '/src/assets/event1.jpeg', link: '#' },
      ],
      past: [
        { title: 'Spring Blossom Extravaganza', description: 'Relive the beauty of spring with our Spring Blossom Extravaganza, featuring floral-themed fashion and design.', image: '/src/assets/event2.jpeg', link: '#' },
        { title: 'Autumn Elegance Showcase', description: 'Enjoy a retrospective of autumn fashion trends at the Autumn Elegance Showcase, highlighting classic fall styles.', image: '/src/assets/event3.jpeg', link: '#' },
      ],
};

const EventsTabs = ({ searchQuery }) => {
  const [activeTab, setActiveTab] = useState('live');

  const filteredEvents = eventsData[activeTab].filter(event =>
    event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="events-tabs" className="py-10 bg-gray-100">
      <div className="text-center mb-8">
        <button onClick={() => setActiveTab('live')} className={`px-4 py-2 mr-4 ${activeTab === 'live' ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'} rounded-full`}>Live Events</button>
        <button onClick={() => setActiveTab('upcoming')} className={`px-4 py-2 mr-4 ${activeTab === 'upcoming' ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'} rounded-full`}>Upcoming Events</button>
        <button onClick={() => setActiveTab('past')} className={`px-4 py-2 ${activeTab === 'past' ? 'bg-pink-500 text-white' : 'bg-white text-pink-500'} rounded-full`}>Past Events</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {filteredEvents.map((event, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 shadow-lg rounded-lg transition-transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-full h-64 md:h-96 lg:h-128 overflow-hidden relative">
              <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mt-4">{event.title}</h3>
            <p className="mt-2 text-gray-600">{event.description}</p>
            <a href={event.link} className="mt-4 inline-block bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300">Learn More</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventsTabs;
