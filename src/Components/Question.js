import React from 'react'
import style from '../Styles/Question.module.css'

export default function Question({ children }) {
  return (
    <div className={style.question}>
      <div className={style.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        Here goes the question from Learn with Sumit?
      </div>
      {children}
    </div>
  )
}
