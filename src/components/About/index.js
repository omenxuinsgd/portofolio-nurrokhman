/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'

const About = () => {
  const aboutArray = 'Presenter, Pelatihan dan Sertifikasi'.split('')

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])


  const images = [
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/0209.%20Sertifikat%20NUR%20ROKHMAN.png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Behind%20Certificate%20Advance%20Class%20IoT%20Platform.png'
  ]

  const images2 = [
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Screenshot%20(82).png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Screenshot%20(81).png'
  ]

  const images3 = [
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Screenshot%20(83).png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Screenshot%20(77).png'
  ]

  const images4 = [
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Screenshot%20(79).png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Screenshot%20(80).png'
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true
  }

  return (
    <>
      <div className="container about-page" style={{overflow: 'auto', textAlign: 'justify'}}>
        <div className="text-zone" style={{width: '80%'}}>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>

          {/* <h2 style={{color: 'white'}}>Kompetisi</h2> */}
        <div style={{columnCount: '2', columnGap: '40px', height: 'auto', color: 'white'}}>
          <div className="portfolio-section" style={{columnCount: '2', columnGap: '10px', marginBottom: '20px'}}>
            <div className="carousel-container">
                    <img src='https://raw.githubusercontent.com/omenxuinsgd/image/main/sertifhackathon.jpg' alt='logo' className="carousel-image" />
            </div>
            <div className="portfolio-text" style={{textAlign: 'center'}}>
              <h2>Juara 1 Hackathon - GDSC UIN Malang (Maliki Tech Fest)</h2>
            </div>
          </div>

          <div className="portfolio-section" style={{columnCount: '2', columnGap: '10px', marginBottom: '20px'}}>
            <div className="carousel-container">
                    <img src='https://raw.githubusercontent.com/omenxuinsgd/image/main/Screenshot%20(70).png' alt='logo' className="carousel-image" />
            </div>
            <div className="portfolio-text" style={{textAlign: 'center'}}>
              <h2>IoT Fundamental: Big Data and analytics - Cisco Network Academy</h2>
            </div>
          </div>


          <div className="portfolio-section" style={{columnCount: '2', columnGap: '10px', marginBottom: '20px'}}>
              <div className="carousel-container">
                <img src='https://raw.githubusercontent.com/omenxuinsgd/image/main/0171.%20Sertifikat%20NUR%20ROKHMAN.png' alt='logo' className="carousel-image" />
              </div>
              <div className="portfolio-text" style={{textAlign: 'center'}}>
                <h2>Pelatihan Online Internet Of Things Beginner - ExperIoT 4.0</h2>
              </div>
          </div>


        <div className="portfolio-section" style={{columnCount: '2', columnGap: '40px', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images2.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Portfolio ${index + 1}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="portfolio-text">
            <h2>Kursus HTML, CSS, & Javascript - Progate</h2>  
          </div>
        </div>


        <div className="portfolio-section" style={{columnCount: '2', columnGap: '40px', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images4.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Portfolio ${index + 1}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="portfolio-text">
            <h2>Kursus Nodejs & Path Pengembangan Web (Node.js) - Progate</h2>  
          </div>
        </div>

          <div className="portfolio-section" style={{columnCount: '2', columnGap: '10px', marginBottom: '20px'}}>
              <div className="carousel-container">
                <img src='https://raw.githubusercontent.com/omenxuinsgd/image/main/Screenshot%20(76).png' alt='logo' className="carousel-image" />
              </div>
              <div className="portfolio-text" style={{textAlign: 'center'}}>
                <h2>Workshop 3 Hari Pelatihan Coding HTML & CSS - Progate</h2>
              </div>
          </div>


        
          <div className="portfolio-section" style={{columnCount: '2', columnGap: '10px', marginBottom: '20px'}}>
              <div className="carousel-container">
                <img src='https://raw.githubusercontent.com/omenxuinsgd/image/main/Screenshot%20(72).png' alt='logo' className="carousel-image" />
              </div>
              <div className="portfolio-text" style={{textAlign: 'center'}}>
                <h2>Presenter International Conference - TSSA 2022</h2>
              </div>
          </div>        


          <div className="portfolio-section" style={{columnCount: '2', columnGap: '10px', marginBottom: '20px'}}>
              <div className="carousel-container">
                <img src='https://raw.githubusercontent.com/omenxuinsgd/image/main/Screenshot%20(74).png' alt='logo' className="carousel-image" />
              </div>
              <div className="portfolio-text" style={{textAlign: 'center'}}>
                <h2>Presenter Diseminasi Hasil Penelitian Fakultas Sains & Teknologi "Hilirisasi Penelitian" - UIN Bandung</h2>
              </div>
          </div>

          <div className="portfolio-section" style={{columnCount: '2', columnGap: '10px', marginBottom: '20px'}}>
              <div className="carousel-container">
                <img src='https://raw.githubusercontent.com/omenxuinsgd/image/main/JUARA%201_NUR%20ROKHMAN.png' alt='logo' className="carousel-image" />
              </div>
              <div className="portfolio-text" style={{textAlign: 'center'}}>
                <h2>Juara 1 Lomba Poster Ilmiah - LSIST UIN Bandung</h2>
              </div>
          </div>

          <div className="portfolio-section" style={{columnCount: '2', columnGap: '10px', marginBottom: '20px'}}>
              <div className="carousel-container">
                <img src='https://raw.githubusercontent.com/omenxuinsgd/image/main/Screenshot%20(69).png' alt='logo' className="carousel-image" />
              </div>
              <div className="portfolio-text" style={{textAlign: 'center'}}>
                <h2>PCAP: Programming Essentials in Python - Cisco Network Academy</h2>
              </div>
          </div>

          <div className="portfolio-section" style={{columnCount: '2', columnGap: '40px', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Portfolio ${index + 1}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="portfolio-text">
            <h2>Pelatihan Online Internet Of Things Kelas Advance IoT Platform - ExperIoT 4.0</h2>    
          </div>
        </div>

        <div className="portfolio-section" style={{columnCount: '2', columnGap: '40px', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images3.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Portfolio ${index + 1}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="portfolio-text">
            <h2>Kursus Git & SQL - Progate</h2>    
          </div>
        </div>
        
        <div className="portfolio-section" style={{columnCount: '2', columnGap: '10px', marginBottom: '20px'}}>
              <div className="carousel-container">
                <img src='https://raw.githubusercontent.com/omenxuinsgd/image/main/Screenshot%20(78).png' alt='logo' className="carousel-image" />
              </div>
              <div className="portfolio-text" style={{textAlign: 'center'}}>
                <h2>Kursus Python - Progate</h2>
              </div>
          </div>

          <div className="portfolio-section" style={{columnCount: '2', columnGap: '10px', marginBottom: '20px'}}>
              <div className="carousel-container">
                <img src='https://raw.githubusercontent.com/omenxuinsgd/image/main/Screenshot%20(75).png' alt='logo' className="carousel-image" />
              </div>
              <div className="portfolio-text" style={{textAlign: 'center'}}>
                <h2>Asisten Praktikum Bahasa Pemrograman C & Sistem Digital</h2>
              </div>
          </div>

          <div className="portfolio-section" style={{columnCount: '2', columnGap: '10px', marginBottom: '20px'}}>
              <div className="carousel-container">
                <img src='https://raw.githubusercontent.com/omenxuinsgd/image/main/Screenshot%20(73).png' alt='logo' className="carousel-image" />
              </div>
              <div className="portfolio-text" style={{textAlign: 'center'}}>
                <h2>Presenter International Conference - ICWT 2023</h2>
              </div>
          </div>


          <div className="portfolio-section" style={{columnCount: '2', columnGap: '10px', marginBottom: '20px'}}>
              <div className="carousel-container">
                <img src='https://raw.githubusercontent.com/omenxuinsgd/image/main/Nur%20Rokhman.jpg' alt='logo' className="carousel-image" />
              </div>
              <div className="portfolio-text" style={{textAlign: 'center'}}>
                <h2>Pengurus Bidang PAO - Robotika UIN Bandung</h2>
              </div>
          </div>


        </div>
      </div>

        {/* <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div> */}
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
