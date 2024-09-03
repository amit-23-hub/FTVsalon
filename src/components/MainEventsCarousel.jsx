
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const mainEvents = [
  {
    name: 'Grand Finale',
    description: 'Join us for the grand finale of the beauty contest!',
    image: '/src/assets/crousel1.webp',
    link: '#'
  },
  {
    name: 'Fashion Show',
    description: 'Witness stunning fashion shows from top designers.',
    image: '/src/assets/crousel1.webp',
    link: '#'
  },
  {
    name: 'Talent Showcase',
    description: 'See incredible talents from our participants.',
    image: '/src/assets/crousel1.webp',
    link: '#'
  }
];

const MainEventsCarousel = ({ searchQuery }) => {
  const filteredEvents = mainEvents.filter(event =>
    event.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="main-events" className="py-10 bg-white">
      <h2 className="text-4xl font-bold text-center mb-8">Main Events</h2>
      <Carousel showThumbs={false} showStatus={false} infiniteLoop autoPlay>
        {filteredEvents.map((event, index) => (
          <div key={index} className="w-full h-full overflow-hidden relative">
            <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white w-full p-4 text-center rounded-b-lg">
              <h3 className="text-xl font-bold">{event.name}</h3>
              <p className="mt-2">{event.description}</p>
              <a href={event.link} className="mt-4 inline-block bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300">Learn More</a>
            </div>
          </div>
        ))}
      </Carousel>
    </section>
  );
};

export default MainEventsCarousel;
