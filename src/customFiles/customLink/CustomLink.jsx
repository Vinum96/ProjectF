import React from 'react'
import styles from '../../styles/HeaderPage.module.css'
import { Link, useMatch } from 'react-router-dom'

function CustomLink({ children, defaultClass, to, ...props }) {
  const match = useMatch(to);
  return (
    <Link className={
      match
        ? `${defaultClass} ${styles.active}`
        : defaultClass}
      to={to} {...props}>
      {children}
    </Link>
  )
}

export default CustomLink