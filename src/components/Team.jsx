import React from "react";
import styles from "./Team.module.css";
import character1 from "../images/team/character1.png";
import character2 from "../images/team/character2.png";


const teamData = [
  {
    name: "John Doe",
    position: "Founder & Head Barber",
    imgSrc: character1,
    bio: "John has over 20 years of experience and founded the barbershop.",
  },
  {
    name: "Jane Smith",
    position: "Senior Barber",
    imgSrc: character2,
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
