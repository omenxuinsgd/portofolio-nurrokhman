import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import LogoTitle from '../../assets/images/logo-s.png';
import LogoTitle2 from '../../assets/images/profile-umeng.jpg';
import Logo from './Logo';
import PopupMenu from './PopupMenu';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [isMenuOpen, setIsMenuOpen] = useState(true); // Mengatur menu agar langsung terbuka

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  const nameArray = 'udip'.split('');
  const jobArray = 'Blockchain Developer'.split('');
  const interestArray = 'Ethical Hacker'.split('');

  useEffect(() => {
    const loadFontAwesome = async () => {
      try {
        const link = document.createElement('link');
        link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css';
        link.rel = 'stylesheet';
        link.integrity = 'sha512-SJT/BV7ojW2EpRXE6L/uZ0xhe/HBnhKXjzbfCJSp5g1hF1s+C8zrx5b0k4vHm4cLvMwI9JXE5lMLoI0rgL8g0w==';
        link.crossOrigin = 'anonymous';
        await document.head.appendChild(link);
        console.log('Font Awesome loaded successfully');
      } catch (error) {
        console.error('Failed to load Font Awesome:', error);
      }
    };

    loadFontAwesome();

    return () => {
      const existingLink = document.querySelector('link[href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"]');
      if (existingLink) {
        document.head.removeChild(existingLink);
        console.log('Font Awesome link removed');
      }
    };
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img src={LogoTitle} alt="Sudip Banerjee" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={interestArray}
              idx={22}
            />
          </h1>
          <h2>
            Full Stack Blockchain Developer / Ethical Hacker / AI/ML Developer
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
        </div>
        <div className="about__me">
          <div className="about__me-image">
            <img src={LogoTitle2} alt="me" />
          </div>
        </div>
        {/* <Logo /> */}
        <div>
          <PopupMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} /> {/* Menampilkan menu pop-up */}
        </div>
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
