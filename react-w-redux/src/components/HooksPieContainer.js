import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyPie } from '../redux'
function HooksPieContainer() {
    const numOfPie = useSelector(state => state.pie.numOfPie);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Number of Pies</h2>
            <h3>{numOfPie}</h3>
            <button onClick={() => dispatch(buyPie())}>Buy Pie</button>
        </div>
    )
}

export default HooksPieContainer
