import React from 'react';
import styles from './Gallery.module.css';
import haircutone from '../images/haircutone.jpg';
import haircuttwo from '../images/haircuttwo.jpg';
import haircutthree from '../images/haircutthree.jpg';
import haircutfor from '../images/haircutfor.jpg';
import haircutfive from '../images/haircutfive.jpg';

const galleryData = [
  { imgSrc: haircutone, description: 'Haircut Style 1' },
  { imgSrc: haircuttwo, description: 'Haircut Style 2' },
  { imgSrc: haircutthree, description: 'Haircut Style 3' },
  { imgSrc: haircutfor, description: 'Haircut Style 4' },
  { imgSrc: haircutfive, description: 'Haircut Style 5' },
  // Adaugă mai multe imagini după cum este necesar
];

const Gallery = () => {
  return (
    <section id="gallery" className={styles.section}>
      <h2>Gallery</h2>
      <div className={styles.grid}>
        {galleryData.map((item, index) => (
          <div key={index} className={styles.card}>
            <img
              src={item.imgSrc}
              alt={item.description}
              width="523px"
              height="650px"
            />
            <div className={styles.overlay}>{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
