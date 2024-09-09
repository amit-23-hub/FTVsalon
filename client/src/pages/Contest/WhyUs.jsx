
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const WhyUs = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Why Choose Us?</h2>
        <div className="flex flex-wrap -mx-4">
          <motion.div
            className="w-full md:w-1/3 px-4 mb-8"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-full flex flex-col justify-between hover:bg-pink-100 hover:shadow-2xl transition duration-300 ease-in-out">
              <div className="text-center mb-4">
                <svg className="w-12 h-12 text-pink-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2l4 -4m5 4.5V21a2 2 0 01-2 2H7a2 2 0 01-2-2v-7.5a2 2 0 011-1.73l5-2.5a2 2 0 012 0l5 2.5a2 2 0 011 1.73z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Expert Stylists</h3>
              <p className="text-gray-600">Our team consists of experienced and talented stylists who stay updated with the latest trends and techniques.</p>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/3 px-4 mb-8"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-full flex flex-col justify-between hover:bg-pink-100 hover:shadow-2xl transition duration-300 ease-in-out">
              <div className="text-center mb-4">
                <svg className="w-12 h-12 text-pink-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m0-4h.01m6.938 4.062a2 2 0 01.962 1.712v5.31a2 2 0 01-.952 1.716l-7 3.908a2 2 0 01-1.901 0l-7-3.908a2 2 0 01-.951-1.716v-5.31a2 2 0 01.951-1.716l7-3.908a2 2 0 011.901 0l7 3.908z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Products</h3>
              <p className="text-gray-600">We use only the highest quality, salon-grade products to ensure the best results for our clients.</p>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/3 px-4 mb-8"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-full flex flex-col justify-between hover:bg-pink-100 hover:shadow-2xl transition duration-300 ease-in-out">
              <div className="text-center mb-4">
                <svg className="w-12 h-12 text-pink-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7M12 19v2m0-18v2m9.293 14.293a1 1 0 00-1.414 0l-1.293 1.293a1 1 0 000 1.414l1.293 1.293a1 1 0 001.414 0l1.293-1.293a1 1 0 000-1.414l-1.293-1.293zM4.707 4.707a1 1 0 00-1.414 0L2 6.293a1 1 0 000 1.414l1.293 1.293a1 1 0 001.414 0L6 7.707a1 1 0 000-1.414L4.707 4.707z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Relaxing Atmosphere</h3>
              <p className="text-gray-600">Our salon is designed to be a haven of relaxation, providing a tranquil environment for you to unwind and enjoy your treatments.</p>
            </div>
          </motion.div>

          {/* Additional Cards */}
          <motion.div
            className="w-full md:w-1/3 px-4 mb-8"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-full flex flex-col justify-between hover:bg-pink-100 hover:shadow-2xl transition duration-300 ease-in-out">
              <div className="text-center mb-4">
                <svg className="w-12 h-12 text-pink-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h10M7 16h10M3 5h18a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Comprehensive Services</h3>
              <p className="text-gray-600">We offer a wide range of services from haircuts and coloring to skincare and massages, all under one roof.</p>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/3 px-4 mb-8"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-full flex flex-col justify-between hover:bg-pink-100 hover:shadow-2xl transition duration-300 ease-in-out">
              <div className="text-center mb-4">
                <svg className="w-12 h-12 text-pink-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zM12 14l4-4m0 0l-4-4m4 4H4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Exceptional Value</h3>
              <p className="text-gray-600">We offer top-notch services at competitive prices, ensuring you get the best value for your money.</p>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/3 px-4 mb-8"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="bg-gray-100 p-6 rounded-lg shadow-lg h-full flex flex-col justify-between hover:bg-pink-100 hover:shadow-2xl transition duration-300 ease-in-out">
              <div className="text-center mb-4">
                <svg className="w-12 h-12 text-pink-500 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.828 14.828a4 4 0 01-5.656 0L4 13a2 2 0 010-2.828l1.172-1.172a4 4 0 015.656 0L12 10.828a2 2 0 012.828 0l1.172 1.172a2 2 0 010 2.828l-1.172 1.172a4 4 0 01-5.656 0zM15 12l4 4m0-4l-4 4M5 12L1 16m0-4l4 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Convenient Location</h3>
              <p className="text-gray-600">Our salon is located in a prime area, making it easy for you to visit us at your convenience.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
