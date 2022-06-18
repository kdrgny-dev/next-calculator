import React from 'react'
import { ACTIONS } from '../pages'

export default function OperationButtons({dispatch, operation}) {
  return (
    <button className='btn btn-operator' onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATOR, payload: { operation } })}>{operation}</button>
  )
}
