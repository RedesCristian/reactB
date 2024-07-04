import React from "react";
import styles from "./Team.module.css";
import character1 from "../images/team/character1.png";
import character2 from "../images/team/character2.png";
import frameSVG from "../images/team/frames/frame.png";
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
  {
    name: "Jane Smith",
    position: "Senior Barber",
    imgSrc: character2,
    bio: "Jane is a highly skilled barber with a passion for styling.",
  },
  {
    name: "Jane Smith",
    position: "Senior Barber",
    imgSrc: character2,
    bio: "Jane is a highly skilled barber with a passion for styling.",
  },
  {
    name: "Jane Smith",
    position: "Senior Barber",
    imgSrc: character2,
    bio: "Jane is a highly skilled barber with a passion for styling.",
  },
  {
    name: "Jane Smith",
    position: "Senior Barber",
    imgSrc: character2,
    bio: "Jane is a highly skilled barber with a passion for styling.",
  },
];

const Team = () => {
  return (
    <section id="team" className={styles.section}>
      <h2>Meet Our Team</h2>
      <div className={styles.mainCardContainer}>
        {/* Filtrăm și afișăm cardul pentru John Doe */}
        {teamData
          .filter((member) => member.name === "John Doe")
          .map((member, index) => (
            <div key={index} className={`${styles.card} ${styles.mainCard}`}>
              <div className={styles.cardInner}>
                {/* Cardul frontal */}
                <div className={styles.cardFront}>
                  {/* Imaginea de profil */}
                  <div
                    className={styles.profilePicture}
                    style={{ backgroundImage: `url(${member.imgSrc})` }}
                  ></div>
                  {/* SVG-ul pentru ramă */}
                  <img className={styles.frame} src={frameSVG} alt="Frame" />
                  {/* Informații despre membrul echipei */}
                  <h3>{member.name}</h3>
                  <p>{member.position}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
      <div className={styles.cards}>
        {/* Filtrăm și afișăm cardurile pentru alți membri ai echipei */}
        {teamData
          .filter((member) => member.name !== "John Doe")
          .map((member, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.cardInner}>
                {/* Cardul frontal */}
                <div className={styles.cardFront}>
                  {/* Imaginea de profil */}
                  <div
                    className={styles.profilePicture}
                    style={{ backgroundImage: `url(${member.imgSrc})` }}
                  ></div>
                  {/* SVG-ul pentru ramă */}
                  <img className={styles.frame} src={frameSVG} alt="Frame" />
                  {/* Informații despre membrul echipei */}
                  <h3>{member.name}</h3>
                  <p>{member.position}</p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Team;
