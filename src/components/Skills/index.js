import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import WordCloud from './wordcloud'
import { BsFillPatchCheckFill } from 'react-icons/bs';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick'
// import imageDrone from '../../assets/images/drone_hive5gkirei.jpg'
// import imageDrone2 from '../../assets/images/drone_hive5g.jpg'

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
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/drone_hiveitb.jpg',
    'https://raw.githubusercontent.com/omenxuinsgd/portofolio-nurrokhman/main/src/assets/images/drone_hive5gkirei.jpg',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/WhatsApp%20Image%202024-06-09%20at%2010.50.36.jpeg',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/drone_hive5g.jpg',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/drone_hiveumeng.jpeg',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/drone_hivetelkom.jpeg'
  ]

  const images2 = [
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/WhatsApp%20Image%202024-06-09%20at%2011.10.52.jpeg',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/1717906587919.jpg',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/1717906753689.jpeg',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/1717906753857.jpeg',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/DSC02529.JPG',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/DSC02530.JPG',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/DSC02500.JPG'
  ]

  const images3 = [
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/gh.png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Picture2.png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Picture3.png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Picture4.png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Presentasi%20Video%20Pitch%20Deck%20Internal%20Bentuk%20Minimalis%20Warna-warni%20(1).png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Picture6.png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Screenshot%20(31).png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/PROJECT%20INTERNSHIP%20(1).png'
  ]

  const images4 = [
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Screenshot%20(32).png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Screenshot%20(33).png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Screenshot%20(34).png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Screenshot%20(35).png'
  ]

  const images5 = [
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/IMG_8117_(1).jpg',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Beige%20Minimal%20Creative%20Portfolio%20-%20Presentation%20(2).png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/IMG_8115_(1).jpg',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/blbtjkt.jpg'
  ]

  const images6 = [
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/WhatsApp%20Image%202024-06-07%20at%2018.03.44.jpeg',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/WhatsApp%20Image%202024-06-07%20at%2018.02.51.jpeg',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/IMG-20240517-WA0008.jpg',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/1717930305916.jpg',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Beige%20Minimal%20Creative%20Portfolio%20-%20Presentation%20(3).png'
  ]

  const images7 = [
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/vyejs.png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Beige%20Minimal%20Creative%20Portfolio%20-%20Presentation%20(3).png'
  ]

  const images8 = [
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/viu.png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/viujs.png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/viujss.png'
  ]

  const images9 = [
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Desain%20tanpa%20judul.png'
  ]

  const images10 = [
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/DSC04747.JPG',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Desain%20tanpa%20judul%20(1).png'
  ]

  const images11 = [
    'https://miro.medium.com/v2/resize:fit:720/format:webp/1*zD4wr2WRyUCl3PdMwHWpdw.png',
    'https://miro.medium.com/v2/resize:fit:720/format:webp/1*AD4NcCA5DsxgLJ2DyLKWgQ.png',
    'https://miro.medium.com/v2/resize:fit:720/format:webp/1*GvBmFOjWAeewNaRHTUpJKQ.png'
  ]

  const images12 = [
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/1.png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/2.png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/3.png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/4.png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/5.png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/6.png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/7.png'
  ]

  const images13 = [
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Desain%20tanpa%20judul%20(2).png'
  ]

  const images14 = [
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Screenshot%20(61).png'
  ]

  const images15 = [
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Desain%20tanpa%20judul%20(3).png'
  ]

  const images16 = [
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Desain%20tanpa%20judul%20(4).png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Desain%20tanpa%20judul%20(5).png',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Desain%20tanpa%20judul%20(6).png'
  ]

  const images17 = [
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/Desain%20tanpa%20judul%20(7).png'
  ]

  const images18 = [
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/WhatsApp%20Image%202024-06-10%20at%2007.49.51.jpeg',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/WhatsApp%20Image%202024-06-10%20at%2007.49.50.jpeg',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/WhatsApp%20Image%202024-06-10%20at%2007.44.09.jpeg',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/WhatsApp%20Image%202024-06-10%20at%2007.49.50%20(1).jpeg',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/WhatsApp%20Image%202024-06-10%20at%2007.56.19%20(1).jpeg',
    'https://raw.githubusercontent.com/omenxuinsgd/image/main/WhatsApp%20Image%202024-06-10%20at%2007.44.09%20(1).jpeg'
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

          <div className="porto-section" style={{columnCount: '2', columnGap: '40px',backgroundColor: 'orange', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`porto ${index + 1}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="porto-text" style={{paddingRight: '20px'}}>
            <h2>Drone Dengan Komunikasi Jaringan Seluler Untuk Inspeksi BTS</h2>
            <p>
              Drone ini digunakan untuk inspeksi pada tower BTS serta dapat dioperasikan secara autopilot menggunakan protokol MAVLINK (Dronekit & PyMavlink) tanpa menggunakan remote control.<br/>
              <br/>Kontroler: Pixhawk & Raspberry Pi<br/>
              Software: Python, Reactjs (Fe), Nestjs (Be), Mission planner/ardupilot<br/>
            </p>
          </div>
        </div>


        <div className="porto-section" style={{columnCount: '2', columnGap: '40px',backgroundColor: 'orange', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images3.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`porto ${index + 1}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="porto-text" style={{paddingRight: '20px'}}>
            <h2>Smart Greenhouse Berbasis Edge Computing Menggunakan Protokol LoRa</h2>
            <p>
              Smart GH dibangun menggunakan LoRa sehingga cocok digunakan pada lahan pertanian di daerah rural.<br/>
              <br/>
              Kontroler: Arduino, Raspberry Pi<br/>
              Protokol: LoRa<br/>
              Pemrograman: Python, C/C++
            </p>
          </div>
        </div>

        <div className="porto-section" style={{columnCount: '2', columnGap: '40px',backgroundColor: 'orange', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images10.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Slide ${index}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="porto-text" style={{paddingRight: '20px'}}>
            <h2>Perancangan Sistem Kamera Streaming Pada Buoy Surveillance</h2>
            <p>
              Kamera digunakan untuk memantau bawah air yang terhubung pada perangkat Raspberry yang juga terhubung dengan sensor-sensor dan aktuator. Url streaming kamera menggunakan protokol RTSP.
              <br/><br/>
              Perangkat: Raspberry Pi, Kamera<br/>
              Pemrograman: Python<br/>
              Protokol: MQTT, RTSP
            </p>
          </div>
        </div>

        <div className="porto-section" style={{columnCount: '2', columnGap: '40px',backgroundColor: 'orange', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images12.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Slide ${index}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="porto-text" style={{paddingRight: '20px'}}>
            <h2>Fullstack Web Development Laboratorium Fisika UIN Bandung</h2>
            <p>
              projek membuat web untuk kebutuhan Laboratorium fisika uin bandung yang meliputi peminjaman barang, informasi lab, virtual lab, jadwal lab.<br/>
              <br/>
              Tools: Reactjs, Expressjs, MySql, Nginx
            </p>
          </div>
        </div>

        <div className="porto-section" style={{columnCount: '2', columnGap: '40px',backgroundColor: 'orange', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images4.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Slide ${index}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="porto-text" style={{paddingRight: '20px'}}>
            <h2>Perancangan Prototipe Smart Garden Berbasis MQTT</h2>
            <p>
            sistem iot dalam project ini menggunakan Nodemcu ESP8266 sebagai controller, servo motor sebagai pemberi nutrisi otomatis, sensor DHT11 untuk monitoring suhu dan kelembapan udara, pompa untuk mengalirkan air secara otomatis, dam relay untukk menyalakan/mematikan lampu yang dikontrol secara otomatis dari website.
            <br/><br/>
            </p>
          </div>
        </div>
        
        <div className="porto-section" style={{columnCount: '2', columnGap: '40px',backgroundColor: 'orange', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images7.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Slide ${index}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="porto-text" style={{paddingRight: '20px'}}>
            <h2>Monitoring IoT Menggunakan Vuejs dan Laravel (MySql)</h2>
            <p>
            Monitroing sistem iot menggunakan vuejs sebagai front-end atau interfacenya, dan laravel sebagai back-end dan mysql sebagai database.<br/>
            <br/>
            link website: https://nurrokhman059.netlify.app/<br/>
            Github: https://bit.ly/leddht_vuejs (fe) dan https://bit.ly/leddht_laravel (be)
            </p>
          </div>
        </div>

        <div className="porto-section" style={{columnCount: '2', columnGap: '40px',backgroundColor: 'orange', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images8.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Slide ${index}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="porto-text" style={{paddingRight: '20px'}}>
            <h2>Monitoring IoT Menggunakan Protokol Mqtt Over Websocket (Vuejs)</h2>
            <p>
            Monitroing sistem iot dengan menggunakan protokol MQTT over Websocket menggunakan nodemcu dan vuejs. menggunakan vuejs sebagai interfacenya, dan laravel sebagai back-end dan mysql sebagai database. 
            <br/><br/>
            Github: https://bit.ly/mqttws_vuejs
            </p>
          </div>
        </div>

        <div className="porto-section" style={{columnCount: '2', columnGap: '40px',backgroundColor: 'orange', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images5.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Slide ${index}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="porto-text" style={{paddingRight: '20px'}}>
            <h2>Trainer IoT Smart Garden Untuk Karyawan PT. PJB Muara Karang </h2>
            <p>
              Menjadi tutor untuk Karyawan di pt. pjb muara karang dalam acara upgrading untuk karyawan PJB seluruh indonesia selama 3 hari.
              <br/>
              <br/>
              Projek IoT: https://bit.ly/project_PJB
            </p>
          </div>
        </div>

        <div className="porto-section" style={{columnCount: '2', columnGap: '40px',backgroundColor: 'orange', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images11.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Slide ${index}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="porto-text" style={{paddingRight: '20px'}}>
            <h2>Dasar PLC FX-14MR Menggunakan Gx-Works2 Mitsubishi</h2>
            <p>
              projek: https://nulismine.medium.com/sinau-plc-2-program-sederhana-plc-fx-14mr-menggunakan-gx-works2-mitsubishi-2e8cc6299eff
            </p>
          </div>
        </div>



        <div className="porto-section" style={{columnCount: '2', columnGap: '40px',backgroundColor: 'orange', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images2.map((image, index) => (
                <div key={index}>
                  <img src={image} alt={`porto ${index + 1}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="porto-text" style={{paddingRight: '20px'}}>
            <h2>Mikroskop Digital Asisten Untuk Objek Mikroskopis Bakteri TBC</h2>
            <p>
              Mikroskop yang dibuat memiliki 3 buah motor yang masing-masing digunakan untuk menggerakan aksis x, y dan z. mikroskop ini dapat menscan sample TBC di preparat secara otomatis dengan mengambil 300 data hasil foto.<br/>
              <br/>Perangkat: arduino, mini pc, motor Nema17, kamera mikroskopis, Monitor.<br/>
              Software: Python, C/C++
            </p>
          </div>
        </div>
        
        <div className="porto-section" style={{columnCount: '2', columnGap: '40px',backgroundColor: 'orange', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images6.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Slide ${index}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="porto-text" style={{paddingRight: '20px'}}>
            <h2>Perancangan Motor Penggerak Antena Radar Berbasis PID</h2>
            <p>
              Sistem penggerak motor digunakan untuk menggerakan antena radar dalam satuan derajat. motor bergerak dapat dioperasikan dari 0 - 180 derajat.
              <br/><br/>
              Perangkat: arduino, motor pg56, optical rotary encoder, lcd 20x4, push button<br/>
              Pemrograman: C/C++
            </p>
          </div>
        </div>

        <div className="porto-section" style={{columnCount: '2', columnGap: '40px',backgroundColor: 'orange', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images9.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Slide ${index}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="porto-text" style={{paddingRight: '20px'}}>
            <h2>AIOT PROJECT - Alat Sorting Sampah Masker & Plastik Untuk Bisnis Polibag Menggunakan Raspberry</h2>
            <p>
              Gerakan 1000 polibag untuk pemberdayaan masyarakat desa. <br/>
              <br/>
              Perangkat: Raspberry Pi, Kamera, Servo<br/>
              Software: Python, Yolo Vx, Edge Impulse, Reactjs, Expressjs
            </p>
          </div>
        </div>

        <div className="porto-section" style={{columnCount: '2', columnGap: '40px',backgroundColor: 'orange', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images13.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Slide ${index}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="porto-text" style={{paddingRight: '20px'}}>
            <h2>Fullstack Web Development Platform Bolabot Techno Robotic School</h2>
            <p>
              membuat web untuk profile dan bisnis perusahaan. bolabot merupakan sekolah robot di bandung.
              <br/>
              <br/>
              Tools: MERN Stack
            </p>
          </div>
        </div>

        <div className="porto-section" style={{columnCount: '2', columnGap: '40px',backgroundColor: 'orange', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images14.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Slide ${index}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="porto-text" style={{paddingRight: '20px'}}>
            <h2>Perancangan Prototipe Jemuran Pintar Pada Aplikasi Android (Kotlin)</h2>
            <p>
              Perangkat: Nodemcu ESP32, Sensor hujan, LDR, Motor Nema 17<br/><br/>
              Pemrograman: C/C++, Kotlin
              Protokol: MQTT
            </p>
          </div>
        </div>

        <div className="porto-section" style={{columnCount: '2', columnGap: '40px',backgroundColor: 'orange', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images15.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Slide ${index}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="porto-text" style={{paddingRight: '20px'}}>
            <h2>Kontrol & Monitoring IoT Protokol MQTT Pada Aplikasi Android (Kotlin)</h2>
            <p>
              Perangkat: Nodemcu ESP8266, DHT11, LED<br/><br/>
              Pemrograman: C/C++, Kotlin
              Protokol: MQTT
            </p>
          </div>
        </div>

        <div className="porto-section" style={{columnCount: '2', columnGap: '40px',backgroundColor: 'orange', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images16.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Slide ${index}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="porto-text" style={{paddingRight: '20px'}}>
            <h2>Projek Pelatihan Jabar Coding Camp - Flutter App</h2>
            <p>
              Mengikuti pelatihan Jabar Coding Camp Batch 1 yang diadakan oleh pemprov jabar.
              <br/>
              <br/>
              Tools: Dart, Flutter, Wordpress, Gitlab
            </p>
          </div>
        </div>

        <div className="porto-section" style={{columnCount: '2', columnGap: '40px',backgroundColor: 'orange', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images18.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Slide ${index}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="porto-text" style={{paddingRight: '20px'}}>
            <h2>Menjadi Tim Pendamping Untuk Ascot Technologies (Italy Company) & TNI AL (Fasharkan Surabaya) Dalam Instalasi Baterai Charger Kapal Selam</h2>
            <p>
              
            </p>
          </div>
        </div>

        <div className="porto-section" style={{columnCount: '2', columnGap: '40px',backgroundColor: 'orange', marginBottom: '20px'}}>
          <div className="carousel-container">
            <Slider {...settings} style={{width: '100%'}}>
              {images17.map((src, index) => (
                <div key={index}>
                  <img src={src} alt={`Slide ${index}`} className="carousel-image" />
                </div>
              ))}
            </Slider>
          </div>
          <div className="porto-text" style={{paddingRight: '20px'}}>
            <h2>Weather Station Berbasis ESP8266 Menggunakan Algoritma Naive Bayes</h2>
            <p>
              Tools: Esp8266, DHT11, LDR<br/>
              <br/>
              Pemrograman: Python (Streamlit), C/C++
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
