import React from 'react'
import { ACTIONS } from '../pages'

export default function DigitButtons({ dispatch, digit, className }) {
  return (
    <button className={`btn ${className}`} onClick={() => dispatch({type: ACTIONS.ADD_DIGIT, payload:{digit}})}>{digit}</button>
  )
}
