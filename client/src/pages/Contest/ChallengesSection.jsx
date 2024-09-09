
import { motion } from 'framer-motion';

const challenges = [
    { 
      title: 'Fashion Design Challenge', 
      description: 'Participants showcase their creativity by designing a unique fashion outfit based on a given theme.', 
      image: '/src/assets/model5.jpeg', 
      registrationLink: '#register-fashion-design', 
      challengeLink: '#fashion-design-challenge' 
    },
    { 
      title: 'Talent Showcase Competition', 
      description: 'An opportunity for contestants to demonstrate their unique talents, from singing to dancing to magic tricks.', 
      image: '/src/assets/result4.jpeg', 
      registrationLink: '#register-talent-showcase', 
      challengeLink: '#talent-showcase-competition' 
    },
    { 
        title: 'New Component', 
        description: 'An opportunity for contestants to demonstrate their unique talents, from singing to dancing to magic tricks.', 
        image: '/src/assets/result3.jpeg', 
        registrationLink: '#register-talent-showcase', 
        challengeLink: '#talent-showcase-competition' 
      },
  ];
  

const ChallengesSection = ({ searchQuery }) => {
  const filteredChallenges = challenges.filter(challenge =>
    challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    challenge.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section id="challenges" className="py-10 bg-white">
      <h2 className="text-4xl font-bold text-center mb-8">Challenges</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {filteredChallenges.map((challenge, index) => (
          <motion.div
            key={index}
            className="bg-white p-4 shadow-lg rounded-lg transition-transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-full h-64 md:h-96 lg:h-128 overflow-hidden relative">
              <img src={challenge.image} alt={challenge.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-xl font-bold mt-4">{challenge.title}</h3>
            <p className="mt-2 text-gray-600">{challenge.description}</p>
            <a href={challenge.registrationLink} className="mt-4 inline-block bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300">Register</a>
            <a href={challenge.challengeLink} className="mt-4 inline-block bg-pink-500 text-white py-2 px-4 rounded-full hover:bg-pink-600 transition duration-300 ml-2">Join Challenge</a>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ChallengesSection;
