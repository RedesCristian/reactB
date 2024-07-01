import React from "react";
import styles from "./About.module.css";

const teamData = [
  {
    name: "John Doe",
    position: "Founder & Head Barber",
    imgSrc: "path_to_john_image.jpg",
    bio: "John has over 20 years of experience and founded the barbershop.",
  },
  {
    name: "Jane Smith",
    position: "Senior Barber",
    imgSrc: "path_to_jane_image.jpg",
    bio: "Jane is a highly skilled barber with a passion for styling.",
  },
  // Adaugă mai mulți membri ai echipei după cum este necesar
];

const timelineData = [
  {
    year: "2000",
    event: "Barbershop founded by John Doe.",
  },
  {
    year: "2005",
    event: "Won Best Barbershop Award.",
  },
  {
    year: "2015",
    event: "Expanded to a second location.",
  },
  // Adaugă mai multe evenimente după cum este necesar
];

const About = () => {
  return (
    <section id="about" className={styles.section}>
      <h2>About Us</h2>
      <div className={styles.team}>
        {teamData.map((member, index) => (
          <div key={index} className={styles.member}>
            <img src={member.imgSrc} alt={member.name} />
            <h3>{member.name}</h3>
            <p>{member.position}</p>
            <p>{member.bio}</p>
          </div>
        ))}
      </div>
      <div className={styles.timeline}>
        <h3>Our Journey</h3>
        <ul>
          {timelineData.map((item, index) => (
            <li key={index}>
              <strong>{item.year}</strong>: {item.event}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
