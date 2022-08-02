import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {increment,decrement} from './CounterSlice'

function Counter() {

  const count=useSelector((state)=>state.counter.value);
  const dispatch=useDispatch()

  return (
    <div className='card'>
      <div className='card-header text-white bg-secondary'>
        <h4>Counter App</h4>
      </div>

      <div className='card-body shadow'>
        <h4>{count}</h4>
        <div className='my-4'>
        <div onClick={()=>{dispatch(increment())}} className='btn btn-success'>Increase</div>
        <div onClick={()=>{dispatch(decrement())}} className='btn btn-danger mx-2'>Decrease</div>
        </div>
      </div>
    </div>
  )
}

export default Counter
