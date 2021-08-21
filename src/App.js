import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
} from "react-router-dom"
import Users from "./components/users/Users";
import Posts from "./components/posts/Posts";
import Comments from "./components/comments/Comments";

export default function App() {
    return (
        <Router>
            <div>
                <Link to={'/'}>default page</Link>
                <br/>
                <Link to={'/users'}>users</Link>
                <br/>
                <Link to={'/posts'}>posts</Link>
                <br/>
                <Link to={'/comments'}>comments</Link>
            </div>
            <Route path={'/users'} render={() => {<Users/>}}/>
            <Route path={'/posts'} render={() => {<Posts/>}}/>
            <Route path={'/comments'} render={() => {<Comments/>}}/>

        </Router>
    );
}