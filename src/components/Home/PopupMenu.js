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
                src="https://github.com/ecemgo/mini-samples-great-tricks/assets/13468728/1f842b2d-1245-497e-9a9e-b1cdb0da1eec"
                alt=""
              />
            </div>
            <div className="hero-content">
              <h1>Ruth Thomson</h1>
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
        {/* Add content for testimonial popup */}
      </div>

      <div className="popup" id="contact">
        {/* Add content for contact popup */}
      </div>
    </div>
  );
};

export default PopupMenu;
