import React from 'react'
import style from '../Styles/Button.module.css'

export default function Button({ children }) {
  return <div className={style.button}>{children}</div>
}
