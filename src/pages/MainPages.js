import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { addNumberActions, deleteAllNumbersActions, setValue } from "../redux/actions/action";

function MainPages() {

  const dispatch = useDispatch()
  const {value, numbers}  = useSelector(state => state.countReducer)

  const changeInput = (event) => {
    dispatch(setValue(+event.target.value))
  }

  const addNumber = () => {
    dispatch(addNumberActions(value))
  }

  const deleteAllNumbers = () => {
    dispatch(deleteAllNumbersActions())
  }



  return (
    <div className='container'>
      <h1 className='main'>Counter</h1>
      <input className='input' type="number" placeholder="number" onChange={changeInput} value={value}/>
      <button className='add-button' disabled={!value} onClick={addNumber}>Add</button>
      <button className='clear-button' disabled={!numbers.length} onClick={deleteAllNumbers}>Clear</button>

      {numbers.map((number, index) => <p className='number-list' key = {index}>{number}</p>)}
    </div>
  );
}

export default MainPages;
