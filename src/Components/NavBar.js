import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo-bg.png'
import style from '../Styles/NavBar.module.css'

export default function NavBar() {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link to="/" className={style.brand}>
            <img src={logo} alt="Learn with Sumit Logo" />
            <h3>Learn with Sumit</h3>
          </Link>
        </li>
      </ul>
      <div className={style.account}>
        <span className="material-icons-outlined" title="Account">
          account_circle
        </span>
        <Link to="/signup">Signup</Link>
        <Link to="login">Login</Link>
      </div>
    </nav>
  )
}
