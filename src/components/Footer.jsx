import React from 'react';
import styles from './Footer.module.css'; // Import CSS Module for styles
import logo from '../images/logo.png'; // Import the image

const Footer = () => {
  return (
    <section className={styles.footerSection}>
      <footer>
        <div className={styles.footerContent}>
          <div>
            <img className={styles.logoFooter} src={logo} alt="Logo" />
          </div>

          <div className={styles.descriptionFooter}>
            Ne mândrim cu tradiția noastră în arta tunsului și a bărbieritului. Echipa noastră de profesioniști pasionați îți oferă nu doar un tuns impecabil, ci și o experiență relaxantă și revigorantă. Descoperă servicii de calitate superioară și atmosfera prietenoasă.
          </div>

          {/* <div className={styles.containerContact}>
            <div className={styles.aspectContact}>
              <div className={styles.icon} id="email">
                <button aria-label="Email" onClick={() => window.location.href = "mailto:exemplu@gmail.com"}>
                  <i className="fas fa-envelope"></i>
                  <h3 className={styles.contactName}>E-mail</h3>
                  <p className={styles.contactDecoration}>exemplu@gmail.com</p>
                </button>
              </div>

              <div className={styles.icon} id="phone">
                <button aria-label="Phone" onClick={() => window.location.href = "tel:0123456789"}>
                  <i className="fas fa-phone-alt"></i>
                  <h3 className={styles.contactName}>Telefon</h3>
                  <p className={styles.contactDecoration}>0123456789</p>
                </button>
              </div>
            </div>

            <div className={`${styles.aspectContact} ${styles.location}`}>
              <div className={styles.icon} id="location">
                <a href="https://www.google.com/maps/search/?api=1&query=Oradea,Strada Menumorut nr. 24" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-map-marker-alt"></i>
                  <h3 className={styles.contactName}>Locație</h3>
                  <p className={styles.contactDecoration}>Oradea, Strada Menumorut nr. 24</p>
                </a>
              </div>

              <div className={`${styles.icon} ${styles.program}`} id="schedule">
                <i className="far fa-clock"></i>
                <h3 className={styles.contactName}>Orar</h3>
                <ul className={styles.scheduleList}>
                  <li><strong>Luni - Vineri:</strong> 10:00 - 22:00</li>
                  <li><strong>Sâmbătă:</strong> 12:00 - 22:00</li>
                  <li><strong>Duminică:</strong> Inchis</li>
                </ul>
              </div>
            </div> */}
          {/* </div> */}
        </div>

        <div className={styles.footerBottom}>
          <div className={styles.footerLeft}>
            &copy; 2024 Numele Companiei. Toate drepturile rezervate.
          </div>
          <div className={styles.footerRight}>
            <ul className={styles.socialMedia}>
              <li className={`${styles.socialItem} ${styles.facebook}`}>
                <a href="https://www.facebook.com">
                  <i className="fab fa-facebook-f"></i>
                  <span>Facebook</span> 
                </a>
              </li>
              <li className={`${styles.socialItem} ${styles.instagram}`}>
                <a href="https://www.instagram.com">
                  <i className="fab fa-instagram"></i>
                  <span>Instagram</span> 
                </a>
              </li>
              <li className={`${styles.socialItem} ${styles.google}`}>
                <a href="https://www.google.com">
                  <i className="fab fa-google"></i>
                  
                </a>
              </li>
              <li className={`${styles.socialItem} ${styles.whatsapp}`}>
                <a href="https://web.whatsapp.com">
                  <i className="fab fa-whatsapp"></i>
                  
                </a>
              </li>
              <li className={`${styles.socialItem} ${styles.tiktok}`}>
                <a href="https://www.tiktok.com">
                  <i className="fab fa-tiktok"></i>
                  
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
