import React from 'react'
import style from '../Styles/Quiz.module.css'

export default function CheckBox({ id, htmlFor, className }) {
  return (
    <label className={`${style.answer} ${className}`} htmlFor={htmlFor}>
      <input type="checkbox" id={id} />A New Hope 1
    </label>
  )
}
