import React from "react";
import { buyPie } from "../feature";
import { useSelector, useDispatch } from "react-redux";

function PieContainer() {
  const numOfPie = useSelector((state) => state.pie.numOfPie);
  const outOfStock = useSelector((state) => state.pie.pieOutOfStock);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Number of Pies</h1>
      <h3>{outOfStock ? "Sorry, we are out of pies." : numOfPie}</h3>
      {outOfStock ? (
        <button onClick={() => dispatch(buyPie())} disabled>
          <span className="sold-out">Add Pie to Cart</span>
        </button>
      ) : (
        <button onClick={() => dispatch(buyPie())}>Add Pie to Cart</button>
      )}
    </div>
  );
}

export default PieContainer;
