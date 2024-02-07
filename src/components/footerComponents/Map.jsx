import React from 'react'
import styles from '../../styles/FooterPage.module.css'

function Map() {
  return (
    <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d16337.909716636532!2d13.360823980588924!3d52.503668845005535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a851cbdd6cfe0f%3A0xb4b0903f299decf1!2sLinkstra%C3%9Fe%202%2F8.%20Etage%2C%2010785%20Berlin!5e0!3m2!1sru!2sde!4v1693068421636!5m2!1sru!2sde" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade">
    </iframe>
  )
}

export default Map