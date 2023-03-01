import React from 'react'
import style from '../Styles/TextInput.module.css'

export default function TextInput({ type, placeholder, icon }) {
  return (
    <div className={style.textInput}>
      <input type={type} placeholder={placeholder} />
      <span className="material-icons-outlined"> {icon} </span>
    </div>
  )
}
