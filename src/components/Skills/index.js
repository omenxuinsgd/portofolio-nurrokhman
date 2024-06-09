import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import WordCloud from './wordcloud'
import { BsFillPatchCheckFill } from 'react-icons/bs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
import imageDrone from '../../assets/images/drone-hive5g.jpg'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  

  const skillsArray = 'Skills'.split('')
  const portoArray = 'Portofolio'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  const images = [
    imageDrone,
    'https://awsimages.detik.net.id/community/media/visual/2023/04/14/gambar-pemandangan-6.jpeg?w=3000',
    'https://awsimages.detik.net.id/community/media/visual/2023/04/14/gambar-pemandangan-6.jpeg?w=3000'
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
      <div className="container skills-page" style={{overflow: 'auto', textAlign: 'justify'}}>
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
          Saya senang belajar berbagai perkembangan teknologi dan memastikan diri untuk menjadi ahli dalam menggunakan satu alat sebelum beralih ke alat berikutnya. 
          </p>
          <p>
          Saya mencari peran di perusahaan yang memberikan kesempatan untuk bekerja dengan teknologi terkini pada proyek-proyek yang menantang dan beragam.
          </p>
        <div className="experience__container">
        <div className="experience__frontend">
          <h3>Embedded System Development</h3>
          <div className="experience__content">
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Research & Dev.</h4>
            </article>
          <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Perangkat & <br/>Protokol IoT</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>LoRa, MQTT, <br/>HTTP, Websocket</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>M2M serial <br/>(SPI, I2C, UART)</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>FreeRTOS & <br/>Multithreading</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Desain PCB<br/>(EasyEda&kiCad)</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Linux</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Robot Operating<br/> System</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>C, C++, Python,<br/>Micropython </h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Arduino, <br/>ESP8266/32 </h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Raspberry Pi</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Drone Dev.</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Dasar PLC</h4>
            </article>
          </div>
        </div>
        <div className="experience__backend">
          <h3>Web & Mobile Development</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>HTML, CSS, <br/>
              Javascript</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Bootstrap</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>MERN Stack</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Nodejs</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Reactjs</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Expressjs</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>MongoDB</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>SQL / MySQL</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Firebase</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Kotlin</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Python (Flask,<br/>Streamlit)</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Git</h4>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <h4>Nginx</h4>
            </article>
          </div>
        </div>
      </div>

        </div>

        <div style={{width: '85%', color: 'white', display: 'inherit', position: 'absolute', top: '550px', left: '130px'}}>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={portoArray}
              idx={15}
            />
            <br />
          </h1>
          
          <div style={{columnCount: '2', columnGap: '40px', rowGap: '40px'}}>

          <div className="portfolio-section" style={{columnCount: '2', columnGap: '40px',backgroundColor: 'orange', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Portfolio ${index + 1}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="portfolio-text" style={{paddingRight: '50px', paddingTop: '10px'}}>
            <h2>Portfolio</h2>
            <p>
              Here you can see some of the projects I have worked on. Each project showcases my skills in web and mobile development as well as embedded system development.
            </p>
          </div>
        </div>

        <div className="portfolio-section" style={{columnCount: '2', columnGap: '40px',backgroundColor: 'orange', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Portfolio ${index + 1}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="portfolio-text" style={{paddingRight: '50px', paddingTop: '10px'}}>
            <h2>Portfolio</h2>
            <p>
              Here you can see some of the projects I have worked on. Each project showcases my skills in web and mobile development as well as embedded system development.
            </p>
          </div>
        </div>

        <div className="portfolio-section" style={{columnCount: '2', columnGap: '40px',backgroundColor: 'orange', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`Portfolio ${index + 1}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="portfolio-text" style={{paddingRight: '50px', paddingTop: '10px'}}>
            <h2>Portfolio</h2>
            <p>
              Here you can see some of the projects I have worked on. Each project showcases my skills in web and mobile development as well as embedded system development.
            </p>
          </div>
        </div>

        <div className="portfolio-section" style={{columnCount: '2', columnGap: '40px',backgroundColor: 'orange', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Slide ${index}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="portfolio-text" style={{paddingRight: '50px', paddingTop: '10px'}}>
            <h2>Portfolio</h2>
            <p>
              Here you can see some of the projects I have worked on. Each project showcases my skills in web and mobile development as well as embedded system development.
            </p>
          </div>
        </div>

          </div>
          
          
        </div>
        

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>
  
      <Loader type="pacman" />
    </>
  )
}

export default Skills
