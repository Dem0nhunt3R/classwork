import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom"
import Cars from "./components/cars/Cars";
import UpdateCar from "./components/updatecar/UpdateCar";
import CreateCar from "./components/createcar/CreateCar";

export default function UserDiv() {
    return (
        <Router>
            <div>

                <Link to={'/cars'}>cars</Link>
                <br/>
                <Link to={'/create-car'}>create car</Link>
                <br/>
                <Link to={'/update-car'}>update car</Link>

                <Route path={'/cars'} render={()=> <Cars/>}></Route>
                <Route path={'/create-car'} render={()=> <CreateCar/>}></Route>
                <Route path={'/update-car'} render={()=> <UpdateCar/>}></Route>

            </div>
        </Router>
    );
}