import React from 'react'
import { useDispatch } from 'react-redux'
import { counterActions } from 'entities/counter/model/slice/counter-slice'

export const Counter = () => {
  const dispatch = useDispatch()
  // const counterValue = useSelector(getCounterValue)

  const inc = () => {
    dispatch(counterActions.increment())
  }

  const dec = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      {/* <h1>value = { counterValue }</h1> */}
      <button onClick={ inc }>inc</button>
      <button onClick={ dec }>dec</button>
    </div>
  )
}
