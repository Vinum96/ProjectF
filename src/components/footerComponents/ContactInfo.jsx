import React from "react";
import styles from "../../styles/FooterPage.module.css";
import instagram from "../../images/instagram.png";
import whatsapp from "../../images/whatsapp.png";

function ContactInfo() {
  return (
    <div className={styles.contactInfo_container}>
      <p className={styles.page_title}>Contact</p>
      <div className={styles.links_container}>
        <div className={styles.link_container}>
          <p className={styles.small_txt}>Phone</p>
          <a className={styles.big_txt} href="tel">
            +49 999 999 99 99
          </a>
        </div>

        <div className={`${styles.link_container} ${styles.socials_container}`}>
          <p className={styles.small_txt}>Socials</p>
          <div className={styles.img_container}>
            <a className={styles.img} href="https://www.instagram.com/">
              <img src={instagram} alt="icon" />
            </a>
            <a className={styles.img} href="https://www.whatsapp.com/">
              <img src={whatsapp} alt="icon" />
            </a>
          </div>
        </div>

        <div className={styles.link_container}>
          <p className={styles.small_txt}>Address</p>
          <a
            className={styles.big_txt}
            href="https://www.google.com/maps/search/AIT+TR+GmbHLinkstra%C3%9Fe+2,+8+OG,+10+785/@52.5079361,13.3724698,17z/data=!3m1!4b1?hl=ru&entry=ttu"
          >
            Linkstraße 2, 8 OG, 10 785, Berlin, <br /> Deutschland
          </a>
        </div>

        <div className={styles.link_container}>
          <p className={styles.small_txt}>Working Hours</p>
          <p className={styles.big_txt}>24 hours a day</p>
        </div>
      </div>
    </div>
  );
}

export default ContactInfo;
