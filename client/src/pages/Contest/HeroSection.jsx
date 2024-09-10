import { motion } from 'framer-motion';

const HeroSection = () => (
  <section className="h-[60vh] relative flex justify-center items-center bg-cover bg-center" style={{ backgroundImage: 'url(/src/assets/images/hero-background.jpg)' }}>
    <div className="bg-black bg-opacity-50 w-full h-full absolute top-0 left-0"></div>
    <motion.div
      className="relative z-10 text-center text-white max-w-3xl px-6 py-12"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-5xl font-bold mb-4">Welcome to the Beauty Contest</h1>
      <p className="text-xl mb-6">Showcase your talent and beauty. Participate in exciting events and challenges!</p>
      <motion.a
        href="#events"
        className="bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300 inline-block"
        whileHover={{ scale: 1.1 }}
      >
        Explore Events
      </motion.a>
    </motion.div>
    <motion.img
      src="/src/assets/images/decorative-element.png"
      alt="Decorative Element"
      className="absolute bottom-0 left-0 w-32 h-32"
      initial={{ opacity: 0, x: -50, y: 50 }}
      animate={{ opacity: 0.5, x: 0, y: 0 }}
      transition={{ duration: 1.5 }}
    />
    <motion.img
      src="/src/assets/images/decorative-element.png"
      alt="Decorative Element"
      className="absolute bottom-0 right-0 w-32 h-32"
      initial={{ opacity: 0, x: 50, y: 50 }}
      animate={{ opacity: 0.5, x: 0, y: 0 }}
      transition={{ duration: 1.5 }}
    />
  </section>
);

export default HeroSection;
