import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import LandingPage from './components/LandingPage';
import Gallery from './components/Gallery';
import FloatingPetals from './components/FloatingPetals';
import Sparkles from './components/Sparkles';
import BackgroundMusic from './components/BackgroundMusic';
import './App.css';

function App() {
  const [showGallery, setShowGallery] = useState(false);
  const [musicStarted, setMusicStarted] = useState(false);

  const handleYesClick = () => {
    setShowGallery(true);
    if (!musicStarted) {
      setMusicStarted(true);
    }
  };

  const handleNoClick = () => {
    if (!musicStarted) {
      setMusicStarted(true);
    }
  };

  return (
    <div className="app">
      <FloatingPetals />
      <Sparkles />
      <BackgroundMusic shouldPlay={musicStarted} />

      <AnimatePresence mode="wait">
        {!showGallery ? (
          <LandingPage
            key="landing"
            onYesClick={handleYesClick}
            onNoClick={handleNoClick}
          />
        ) : (
          <Gallery key="gallery" />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
