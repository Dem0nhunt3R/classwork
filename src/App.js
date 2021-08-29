import './App.css';
import {useReducer} from "react";
import reducer from "./reducers/reducer";

export default function UserDiv() {

    const [{a, b, c}, dispatch] = useReducer(reducer,{a:0,b:0,c:0});

    return (
        <div>
            <h2>a - {a}</h2>
            <button onClick={() => dispatch({obj: '1', diya: '+'})}>increment</button>
            <button onClick={() => dispatch({obj: '1', diya: '-'})}>decrement</button>
            <h2>b - {b}</h2>
            <button onClick={() => dispatch({obj: '2', diya: '+'})}>increment</button>
            <button onClick={() => dispatch({obj: '2', diya: '-'})}>decrement</button>
            <h2>c - {c}</h2>
            <button onClick={() => dispatch({obj: '3', diya: '+'})}>increment</button>
            <button onClick={() => dispatch({obj: '3', diya: '-'})}>decrement</button>
        </div>
    );
}