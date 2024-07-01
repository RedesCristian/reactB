import React from "react";
import styles from "./Services.module.css";

const servicesData = [
  {
    title: "Haircut",
    description: "Get a stylish haircut from our expert barbers.",
    price: "$20",
    imgSrc: "path_to_haircut_image.jpg",
  },
  {
    title: "Shave",
    description: "Experience a clean and smooth shave.",
    price: "$15",
    imgSrc: "path_to_shave_image.jpg",
  },
  {
    title: "Beard Trim",
    description: "Keep your beard neat and trimmed.",
    price: "$10",
    imgSrc: "path_to_beard_trim_image.jpg",
  },
  {
    title: "Hair Wash",
    description: "Relax with a professional hair wash.",
    price: "$5",
    imgSrc: "path_to_hair_wash_image.jpg",
  },
  {
    title: "Facial",
    description: "Rejuvenate your skin with our facial treatments.",
    price: "$25",
    imgSrc: "path_to_facial_image.jpg",
  },
];

const Services = () => {
  return (
    <section id="services" className={styles.section}>
      <h2>Our Services</h2>
      <div className={styles.cards}>
        {servicesData.map((service, index) => (
          <div key={index} className={styles.card}>
            <img src={service.imgSrc} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <div className={styles.price}>{service.price}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
