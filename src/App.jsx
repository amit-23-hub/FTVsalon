import { useState } from 'react';
import HeroSection from './components/HeroSection';
import MainEventsCarousel from './components/MainEventsCarousel';
import EventsTabs from './components/EventsTabs';
import ChallengesSection from './components/ChallengesSection';
import ResultsSection from './components/ResultsSection';
import SearchBar from './components/SearchBar';

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <>
      <HeroSection />
      <SearchBar onSearch={handleSearch} />
      <MainEventsCarousel searchQuery={searchQuery} />
      <EventsTabs searchQuery={searchQuery} />
      <ChallengesSection searchQuery={searchQuery} />
      <ResultsSection searchQuery={searchQuery} />
    </>
  );
};

export default App;
