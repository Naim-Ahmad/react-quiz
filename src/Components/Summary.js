import React from 'react'
import image from '../Assets/success.png'
import style from '../Styles/Summary.module.css'

export default function Result() {
  return (
    <div className={style.summary}>
      <div className={style.point}>
        <p className={style.score}>
          Your score is <br />5 out of 10
        </p>
      </div>

      <div className={style.badge}>
        <img src={image} alt="Success" />
      </div>
    </div>
  )
}
