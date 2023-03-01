import React from 'react'
import style from '../Styles/Form.module.css'

export default function Form({ formType, children }) {
  return (
    <form className={`${formType} ${style.form}`} action="#">
      {children}
    </form>
  )
}
