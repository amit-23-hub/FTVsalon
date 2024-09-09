import { motion } from 'framer-motion';

const EventCards = ({ events }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
    {events.map((event, index) => (
      <motion.div
        key={index}
        className="bg-white p-4 shadow-lg rounded-lg transition-transform hover-scale-105"
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
);

export default EventCards;
