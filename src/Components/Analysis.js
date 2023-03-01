import React from 'react'
import style from '../Styles/Analysis.module.css'

export default function Analysis({ children }) {
  return (
    <div className={style.analysis}>
      <h1>Question Analysis</h1>
      <h4>You answerd 5 out of 10 questions correctly</h4>
    </div>
  )
}
