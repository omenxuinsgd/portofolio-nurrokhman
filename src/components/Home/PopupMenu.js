import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faAddressCard,
  faLaptopCode,
  faUsers,
  faEnvelope,
  faXmark,
  faWindowMinimize,
  faUpRightAndDownLeftFromCenter,
} from '@fortawesome/free-solid-svg-icons';
import Swiper from 'swiper';
import './PopupMenu.scss';
import imageUmeng from '../../assets/images/umeng-present_upscaled2.png'
import imageUmeng2 from '../../assets/images/umeng-kuliah.png'
import imageUmeng3 from '../../assets/images/logo-kemdikbud.png'
import imageUmeng4 from '../../assets/images/lsist.jpg'
import imageUmeng5 from '../../assets/images/robotika.png'
import imageUmeng6 from '../../assets/images/bindes.png'
import imageUmeng7 from '../../assets/images/logo-kupu.jpg'
import imageUmeng8 from '../../assets/images/bolabot.png'
import imageUmeng9 from '../../assets/images/myrobo.jpg'
import imageUmeng10 from '../../assets/images/elektro.jpeg'
import imageUmeng11 from '../../assets/images/rakamin.png'

const PopupMenu = () => {
  useEffect(() => {
    const iconBoxes = document.querySelectorAll(".icon-box");
    const body = document.querySelector("body");
    const closeBtns = document.querySelectorAll(".close-btn");
    const maximizeBtns = document.querySelectorAll(".maximize-btn");

    const openPopup = (modalId) => {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.style.display = 'block';
        body.classList.add('prevent-background-scroll');
      }
    };

    const closePopup = (modal) => {
      modal.style.display = 'none';
      body.classList.remove('prevent-background-scroll');
    };

    iconBoxes.forEach((btn) => {
      const modalId = btn.getAttribute('data-modal');
      btn.addEventListener('click', () => openPopup(modalId));
    });

    closeBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const modal = btn.closest('.popup');
        closePopup(modal);
      });
    });

    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('popup')) {
        closePopup(e.target);
      }
    });

    maximizeBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const modal = btn.closest('.popup');
        const container = modal.querySelector('.popup-container');
        const body = modal.querySelector('.popup-body');

        if (modal.classList.contains('maximized')) {
          container.style.width = 'min(900px, 90%)';
          container.style.top = '45%';
          body.style.height = '70vh';
        } else {
          container.style.width = '100%';
          container.style.top = '50%';
          body.style.height = '90vh';
        }

        modal.classList.toggle('maximized');
        body.classList.toggle('prevent-scroll');
      });
    });

    new Swiper('.swiper', {
      preventClicks: true,
      noSwiping: true,
      freeMode: false,
      spaceBetween: 10,
      navigation: {
        nextEl: '.next',
        prevEl: '.prev',
      },
      mousewheel: {
        invert: false,
        thresholdDelta: 50,
        sensitivity: 1,
      },
      breakpoints: {
        0: { slidesPerView: 1 },
        680: { slidesPerView: 2 },
        1100: { slidesPerView: 3 },
        1600: { slidesPerView: 4 },
      },
    });

    return () => {
      // Clean up event listeners
      iconBoxes.forEach((btn) => {
        const modalId = btn.getAttribute('data-modal');
        btn.removeEventListener('click', () => openPopup(modalId));
      });
      closeBtns.forEach((btn) => {
        btn.removeEventListener('click', () => {
          const modal = btn.closest('.popup');
          closePopup(modal);
        });
      });
      document.removeEventListener('click', (e) => {
        if (e.target.classList.contains('popup')) {
          closePopup(e.target);
        }
      });
      maximizeBtns.forEach((btn) => {
        btn.removeEventListener('click', () => {
          const modal = btn.closest('.popup');
          const container = modal.querySelector('.popup-container');
          const body = modal.querySelector('.popup-body');

          if (modal.classList.contains('maximized')) {
            container.style.width = 'min(900px, 90%)';
            container.style.top = '45%';
            body.style.height = '70vh';
          } else {
            container.style.width = '100%';
            container.style.top = '50%';
            body.style.height = '90vh';
          }

          modal.classList.toggle('maximized');
          body.classList.toggle('prevent-scroll');
        });
      });
    };
  }, []);


  return (
    <div>
      <section>
        <div className="icon-container">
          <div className="icon-box about" data-modal="about">
            <FontAwesomeIcon icon={faAddressCard} className='fa-regular' color="white" size='2x' />
          </div>
          <div className="icon-box contact" data-modal="contact">
            <FontAwesomeIcon icon={faEnvelope} color="white" size='2x' />
          </div>
          <div className="icon-box testimonial" data-modal="testimonial">
            <FontAwesomeIcon icon={faLaptopCode} color="white" size='2x' />
          </div>
          <div className="icon-box projects" data-modal="projects">
            <FontAwesomeIcon icon={faUsers} color="white" size='2x' />
          </div>
        </div>
      </section>

      <div className="popup" id="about">
        <div className="popup-container">
          <div className="popup-header">
            <div className="button-container">
              <button className="close-btn circle-btn red">
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <button className="close-btn circle-btn yellow">
                <FontAwesomeIcon icon={faWindowMinimize} />
              </button>
              <button className="maximize-btn circle-btn green">
                <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
              </button>
            </div>
          </div>
          <div className="popup-body about-container">
            <div className="img-frame">
              <img
                src={imageUmeng}
                alt="profile umeng"
              />
            </div>
            <div className="hero-content">
              <h1>Nur Rokhman</h1>
              <p>
                {/* I'm a front-end developer. I have dedicated myself to creating
                visually appealing and user-friendly websites. I'm always open to
                using new skill sets and I believe in the power of collaboration,
                working closely with designers and back-end developers to deliver
                cohesive and effective solutions. */}
                Saya Alumni Universitas Islam Negeri Sunan Gunung Djati jurusan Teknik Elektro (IPK: 3.72/4.00). Tertarik dengan Internet Of Things, terutama di Mikrokontroller dan Hardware Smart Device (Machine-to-machine/M2M). Memiliki pengalaman lebih dari 1 tahun Bekerja di PT Kreasi Rekayasa Indonesia, sebagai IoT Engineer. Familiar dengan teknologi IoT seperti Raspberry Pi, Arduino, ESP32/8266, Python, Javascript, dan MongoDB. Saya mencari pengembangan lebih lanjut di Embedded System untuk proyek yang lebih menantang.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="popup" id="testimonial">
        <div className="popup-container">
          <div className="popup-header">
            <div className="button-container">
              <button className="close-btn circle-btn red">
                <FontAwesomeIcon icon={faXmark} />
              </button>
              <button className="close-btn circle-btn yellow">
                <FontAwesomeIcon icon={faWindowMinimize} />
              </button>
              <button className="maximize-btn circle-btn green">
                <FontAwesomeIcon icon={faUpRightAndDownLeftFromCenter} />
              </button>
            </div>
          </div>
          <div className="popup-body testimonial-container">
            <h1>Pendidikan</h1>
            <div className="slider-container">
              <div className="swiper">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="user-info">
                      <img
                        src={imageUmeng2}
                        alt="" />
                      <h2 style={{color: 'orange', fontWeight: 'bold'}}>UIN Sunan Gunung Djati Bandung<br/>
                      <span style={{color: 'white'}}>
                      2019 - 2023
                      </span></h2>
                    </div>
                    <p>
                      Jurusan: S1 - Teknik Elektro<br/>
                      Konsentrasi: Teknik Kendali & Komputer<br/>
                      IPK: 3.72 / 4.00<br/>
                      Penerima Beasiswa: Kip-Kuliah<br/>
                    </p>
                  </div>
                  <div className="swiper-slide">
                    <div className="user-info">
                      <img
                        src={imageUmeng3}
                        alt="" />
                      <h2 style={{color: 'orange', fontWeight: 'bold'}}>SMA Negeri 1 Ciwaringin<br/>
                      <span style={{color: 'white'}}>
                      2016 - 2019
                      </span></h2>
                    </div>
                    <p>
                      Konsentrasi: Matematika & IPA (MIPA)
                      Ekstrakulikuler: Kelompok Ilmiah Remaja (KIR)
                    </p>
                  </div>
                  <div className="swiper-slide">
                    <div className="user-info">
                      <img
                        src={imageUmeng3}
                        alt="" />
                      <h2 style={{color: 'orange', fontWeight: 'bold'}}>SMP Negeri 2 Ciwaringin<br/>
                      <span style={{color: 'white'}}>
                      2012 - 2016
                      </span></h2>
                    </div>
                    <p>
                      Pelajar / Siswa
                    </p>
                  </div>
                  <div className="swiper-slide">
                    <div className="user-info">
                      <img
                        src={imageUmeng3}
                        alt="" />
                      <h2 style={{color: 'orange', fontWeight: 'bold'}}>SD Negeri 1 Gintung Tengah<br/>
                      <span style={{color: 'white'}}>
                      2006 - 2012
                      </span></h2>
                    </div>
                    <p>
                      Pelajar / Siswa
                    </p>
                  </div>
                </div>
                <div className="prev">Prev</div>
                <div className="next">Next</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="popup" id="projects">
      <div class="popup-container">
        <div class="popup-header">
          <div class="button-container">
            <button class="close-btn circle-btn red">
              <i class="fa-solid fa-xmark"></i>
            </button>
            <button class="close-btn circle-btn yellow">
              <i class="fa-solid fa-window-minimize"></i>
            </button>
            <button class="maximize-btn circle-btn green">
              <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
            </button>
          </div>
        </div>

        <div class="popup-body">
          {/* <div class="skill-list">
            <h1>Skills</h1>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Vue JS</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
            </ul>
          </div> */}

          <div class="project-container">
            <h1>Pengalaman Organisasi & Kerelawanan</h1>
            <div class="all-projects">
              <div>
              <h3>Lingkar Studi Ilmiah Sains dan Teknologi (LSIST) UIN Bandung</h3>
              <p>Jabatan: Sekretaris Umum<br/>
              Periode: Jan 2021 – Jan 2022</p>
              </div>
              <div class="project-box">
                <img
                  src={imageUmeng4}
                  alt="" />
                <div class="overlay">
                  <h3>LSIST UIN Bandung</h3>
                  <button class="more-btn">
                    <span><a href='https://www.instagram.com/p/CK_aWlKJfdY/?img_index=4'>Learn More</a></span>
                  </button>
                </div>
              </div>
              
              <div>
              <h3>Robotika UIN Bandung</h3>
              <p>Jabatan: Staff Pengembangan Aparatur Organisasi (PAO)<br/>
              Periode: Jan 2021 – Jan 2022</p>
              </div>
              <div class="project-box">
                <img
                  src={imageUmeng5}
                  alt="" />
                <div class="overlay">
                  <h3>Robotika UIN Bandung</h3>
                  <button class="more-btn">
                    <span><a href='https://www.instagram.com/p/ChJHUFcPVQ_/'>Learn More</a></span>
                  </button>
                </div>
              </div>

              <div>
              <h3>Volunteer Ruang Kita Mengabdi (Yayasan)</h3>
              <p>Jabatan: Staff Divisi Pendidikan<br/>
              Periode: Agustus 2020 - Desember 2020</p>
              </div>
              <div class="project-box">
                <img
                  src={imageUmeng6}
                  alt="" />
                <div class="overlay">
                  <h3>Volunteer Ruang Kita Mengabdi</h3>
                  <button class="more-btn">
                  <span><a href='https://www.instagram.com/p/CEL0GESsCv5/?img_index=3'>Learn More</a></span>
                  </button>
                </div>
              </div>

              {/* <div class="project-box">
                <img
                  src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/28946a23-30af-4b36-b30b-e4a3e696aaf6"
                  alt="" />
                <div class="overlay">
                  <h3>Plant Search App</h3>
                  <button class="more-btn">
                    <span>Learn More</span>
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="popup" id="contact">
      <div class="popup-container">
        <div class="popup-header">
          <div class="button-container">
            <button class="close-btn circle-btn red">
              <i class="fa-solid fa-xmark"></i>
            </button>
            <button class="close-btn circle-btn yellow">
              <i class="fa-solid fa-window-minimize"></i>
            </button>
            <button class="maximize-btn circle-btn green">
              <i class="fa-solid fa-up-right-and-down-left-from-center"></i>
            </button>
          </div>
        </div>

        <div class="popup-body">
          {/* <div class="skill-list">
            <h1>Skills</h1>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Vue JS</li>
              <li>Bootstrap</li>
              <li>Tailwind CSS</li>
            </ul>
          </div> */}

          <div class="project-container">
            <h1>Pengalaman Kerja & Magang</h1>
            <div class="all-projects" style={{textAlign: 'justify'}}>
              <div>
              <h3>PT. Kreasi Rekayasa Indonesia (KIREI)</h3>
              <p>Posisi: IoT Engineer<br/>
              Periode: Agustus 2023 – Sekarang</p>
              </div>
              <div class="project-box">
                <a href='https://kirei.co.id/'>
                <img style={{width: '70px', height: '70px', borderRadius: '50%'}}
                  src={imageUmeng7}
                  alt="" />
                  </a>
              </div>

              <div>
              <h3>CV. Bolabot (Techno Robotic School)</h3>
              <p>Posisi: Researcher (Freelance)<br/>
              Periode: Agustus 2022 – Sekarang</p>
              </div>
              <div class="project-box">
                <a href='http://www.bolabot.com/'>
                <img style={{width: '70px', height: '70px', borderRadius: '50%'}}
                  src={imageUmeng8}
                  alt="" />
                  </a>
              </div>
              
              <div>
              <h3>PT. Kreasi Rekayasa Indonesia (KIREI)</h3>
              <p>Posisi: IoT Hardware Developer (Magang)<br/>
              Periode: Maret 2022 – Agustus 2023</p>
              </div>
              <div class="project-box">
                <a href='https://kirei.co.id/'>
                <img style={{width: '70px', height: '70px', borderRadius: '50%'}}
                  src={imageUmeng7}
                  alt="" />
                  </a>
              </div>

              <div>
              <h3>Lab. Elektro UIN Bandung</h3>
              <p>Posisi: Asisten Praktikum Sistem Digital<br/>
              Periode: Agustus 2022 – Desember 2022</p>

              <p>Posisi: Asisten Praktikum Pemrograman (Bahasa C)<br/>
              Periode: Agustus 2021 – Desember 2022</p>
              </div>
              <div class="project-box">
                <a href='https://ee.uinsgd.ac.id/'>
                <img style={{width: '70px', height: '70px', borderRadius: '50%'}}
                  src={imageUmeng10}
                  alt="" />
                  </a>
              </div>

              <div>
              <h3>PT Investree Radhika Jaya (Investree)<br/>Rakamin Academy</h3>
              <p>Posisi: Fullstack Web Developer<br/>(Virtual Internship Experience)<br/>
              Periode: Mei 2022 – Juni 2022</p>
              </div>
              <div class="project-box">
                <a href='https://www.rakamin.com/'>
                <img style={{width: '70px', height: '70px', borderRadius: '50%'}}
                  src={imageUmeng11}
                  alt="" />
                  </a>
              </div>

              <div>
              <h3>MyRobo (School Of Robotic)</h3>
              <p>Posisi: Tutor / Instructor (Part Time)<br/>
              Periode: Januari 2022 – Juni 2022</p>
              </div>
              <div class="project-box">
                <a href='https://www.instagram.com/myrobo_official/'>
                <img style={{width: '70px', height: '70px', borderRadius: '50%'}}
                  src={imageUmeng9}
                  alt="" />
                  </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default PopupMenu;
