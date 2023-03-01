import React from 'react'
import style from '../Styles/illustration.module.css'

export default function Illustration({ image, alt }) {
  return (
    <div className={style.illustration}>
      <img src={image} alt={alt} />
    </div>
  )
}
