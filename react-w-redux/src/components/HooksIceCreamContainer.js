import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIceCream } from '../redux'

function HooksIceCreamContainer() {
  const numOfIceCream = useSelector((state) => state.iceCream.numOfIceCream);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of Ice Cream</h2>
      <h3>{ numOfIceCream }</h3>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  );
}

export default HooksIceCreamContainer;
