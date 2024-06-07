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
          <div className="icon-box projects" data-modal="projects">
            <FontAwesomeIcon icon={faLaptopCode} color="white" size='2x' />
          </div>
          <div className="icon-box testimonial" data-modal="testimonial">
            <FontAwesomeIcon icon={faUsers} color="white" size='2x' />
          </div>
          <div className="icon-box contact" data-modal="contact">
            <FontAwesomeIcon icon={faEnvelope} color="white" size='2x' />
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
                I'm a front-end developer. I have dedicated myself to creating
                visually appealing and user-friendly websites. I'm always open to
                using new skill sets and I believe in the power of collaboration,
                working closely with designers and back-end developers to deliver
                cohesive and effective solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="popup" id="projects">
        {/* Add content for projects popup */}
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
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/c3e8a2a1-ab19-4fae-be0c-92bb3b6f3122"
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
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/f54a0d84-8f52-4fa6-886f-0acb5a724130"
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
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/30f2184c-df17-4fd8-aabf-2db7cdad85e4"
                        alt="" />
                      <h2 style={{color: 'orange', fontWeight: 'bold'}}>SMP Negeri 2 Ciwaringin<br/>
                      <span style={{color: 'white'}}>
                      2012 - 2016
                      </span></h2>
                    </div>
                    <p>
                      Ruth's ability to transform ideas into visually appealing
                      and user-friendly websites is truly impressive.
                    </p>
                  </div>
                  <div className="swiper-slide">
                    <div className="user-info">
                      <img
                        src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/30f2184c-df17-4fd8-aabf-2db7cdad85e4"
                        alt="" />
                      <h2 style={{color: 'orange', fontWeight: 'bold'}}>SD Negeri 1 Gintung Tengah<br/>
                      <span style={{color: 'white'}}>
                      2006 - 2012
                      </span></h2>
                    </div>
                    <p>
                      Ruth's ability to transform ideas into visually appealing
                      and user-friendly websites is truly impressive.
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


      <div className="popup" id="contact">
        {/* Add content for contact popup */}
      </div>
    </div>
  );
};

export default PopupMenu;
