import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section id="contact" className={styles.section}>
      <h2>Contact Us</h2>
      <div className={styles.contactInfo}>
        <div className={styles.map}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.6445158662447!2d21.940408215874575!3d47.06792447915262!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4747dcf17a1f7d45%3A0x1f4e08ae27fd62ed!2sStrada%20Menumorut%2024%2C%20Oradea%20410025%2C%20Romania!5e0!3m2!1sen!2sus!4v1628178412345!5m2!1sen!2sus"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            title="Google Maps Location"
          ></iframe>
        </div>
        <div className={styles.details}>
          <h3>Contact Details</h3>
          <p>
            <strong>Address:</strong> Strada Menumorut 24, Oradea
          </p>
          <p>
            <strong>Email:</strong> info@barbershop.com
          </p>
          <p>
            <strong>Phone:</strong> +40 123 456 789
          </p>
          <div className={styles.hours}>
            <h3>Opening Hours</h3>
            <table>
              <thead>
                <tr>
                  <th>Day</th>
                  <th>Hours</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Monday</td>
                  <td>09:00 - 18:00</td>
                </tr>
                <tr>
                  <td>Tuesday</td>
                  <td>09:00 - 18:00</td>
                </tr>
                <tr>
                  <td>Wednesday</td>
                  <td>09:00 - 18:00</td>
                </tr>
                <tr>
                  <td>Thursday</td>
                  <td>09:00 - 18:00</td>
                </tr>
                <tr>
                  <td>Friday</td>
                  <td>09:00 - 18:00</td>
                </tr>
                <tr>
                  <td>Saturday</td>
                  <td>10:00 - 16:00</td>
                </tr>
                <tr>
                  <td>Sunday</td>
                  <td>Closed</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <form>
        <h3>Contact Form</h3>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
