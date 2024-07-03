import React from "react";
import styles from "./Team.module.css";

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

const Team = () => {
  return (
    <section id="team" className={styles.section}>
      <h2>Meet Our Team</h2>
      <div className={styles.cards}>
        {teamData.map((member, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.cardInner}>
              <div className={styles.cardFront}>
                <img src={member.imgSrc} alt={member.name} />
                <h3>{member.name}</h3>
                <p>{member.position}</p>
              </div>
              <div className={styles.cardBack}>
                <h3>{member.name}</h3>
                <p>{member.position}</p>
                <p>{member.bio}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
