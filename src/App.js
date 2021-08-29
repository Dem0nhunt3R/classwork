import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom"
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";

export default function UserDiv() {
    return (
        <Router>
            <Link to={'/users'}>users</Link>
            <br/>
            <Link to={'/posts'}>posts</Link>
            <div>
                <div>
                    <Route path={'/users'} component={Users}/>
                    <Route path={'/posts'} component={Posts}/>
                </div>
            </div>
        </Router>
    );
}