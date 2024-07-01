import React from "react";
import styles from "./Gallery.module.css";

const galleryData = [
  { imgSrc: "path_to_image1.jpg", description: "Haircut Style 1" },
  { imgSrc: "path_to_image2.jpg", description: "Haircut Style 2" },
  { imgSrc: "path_to_image3.jpg", description: "Haircut Style 3" },
  { imgSrc: "path_to_image4.jpg", description: "Haircut Style 4" },
  { imgSrc: "path_to_image5.jpg", description: "Haircut Style 5" },
  // Adaugă mai multe imagini după cum este necesar
];

const Gallery = () => {
  return (
    <section id="gallery" className={styles.section}>
      <h2>Gallery</h2>
      <div className={styles.grid}>
        {galleryData.map((item, index) => (
          <div key={index} className={styles.card}>
            <img src={item.imgSrc} alt={item.description} />
            <div className={styles.overlay}>{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
