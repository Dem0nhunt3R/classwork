import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
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
            <Route path={'/users'} render={() => {
                return <div><Users/></div>
            }}/>
            <Route path={'/posts'} render={() => {
                return <div><Posts/></div>
            }}/>
            <Route path={'/comments'} render={() => {
                return <div><Comments/></div>
            }}/>

        </Router>
    );
}