import React from "react";
import styles from "../styles/FooterPage.module.css";
import ContactInfo from "../components/footerComponents/ContactInfo";
import Map from "../components/footerComponents/Map";

function FooterPage() {
  return (
    <footer className={styles.footer}>
      <ContactInfo />
      <Map />
    </footer>
  );
}

export default FooterPage;
