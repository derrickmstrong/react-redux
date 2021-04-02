import React, { useState } from "react";
import { buyPie } from "../feature";
import { useSelector, useDispatch } from "react-redux";

function CustomPieContainer() {
  const [number, setNumber] = useState(1)

  const numOfPie = useSelector((state) => state.pie.numOfPie);
  const outOfStock = useSelector((state) => state.pie.pieOutOfStock);
  
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Custom Number of Pies</h1>
      <h3>{outOfStock ? "Sorry, we are out of pies." : numOfPie}</h3>
      <input
        type="number"
        min="1"
        max={numOfPie}
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      {outOfStock ? (
        <button onClick={() => dispatch(buyPie(number))} disabled>
          <span className="sold-out">Add {number} Pie to Cart</span>
        </button>
      ) : (
        <button onClick={() => dispatch(buyPie(number))}>
          Add {number} Pie to Cart
        </button>
      )}
    </div>
  );
}

export default CustomPieContainer;
