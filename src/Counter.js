import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import './App.css';
import {connect} from 'react-redux'

function Counter() {
    const count=useSelector(state=>state.count)
    const dispatch=useDispatch();
    const increment=()=>{
        return { type:'INCREMENT'}
    };
    const decrement=()=>{
        return { type:'DECREMENT'}
    };
    return (
        
        <div className="counter">
            <h2>Counter</h2>
            <div className="btn">
            <button onClick={()=>dispatch(decrement())}>-</button>
            <span>{count}</span>
            <button onClick={()=>dispatch(increment())}>+</button>
            </div>
        </div>
        
    )
};
const mapStateToProps=state=>{
    console.log(state);
    return {count:state.count}
};

export default connect(mapStateToProps)(Counter);
