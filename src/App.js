import './App.css';
import {useReducer} from "react";

const reducer = (state, action) => {
    switch (action) {
        case '+':
            return state + 10;
        case '-':
            return state - 2;
        default:
            return state;
    }
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h2>state - {state}</h2>
            <button onClick={() => dispatch('+')}>inc state by 10</button>
            <button onClick={() => dispatch('-')}>dec state by 2</button>
        </div>
    );
}