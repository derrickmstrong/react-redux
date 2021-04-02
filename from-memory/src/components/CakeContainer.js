import React from "react";
import { buyCake } from "../feature";
import { useSelector, useDispatch } from "react-redux";
function CakeContainer() {
  const numOfCake = useSelector((state) => state.cake.numOfCake);
  const outOfStock = useSelector((state) => state.cake.cakeOutOfStock);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of Cakes</h1>
      <h3>{outOfStock ? "Sorry, we are out of cakes." : numOfCake}</h3>
      {outOfStock ? (
        <button onClick={() => dispatch(buyCake())} disabled>
          <span className="sold-out">Add Cake to Cart</span>
        </button>
      ) : (
        <button onClick={() => dispatch(buyCake())}>Add Cake to Cart</button>
      )}
    </div>
  );
}

export default CakeContainer;
