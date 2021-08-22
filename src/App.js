import './App.css';
import UserSelectComponent from "./components/form/UserSelectComponent";
import {Posts} from "./components/posts/Posts";

export default function AppDiv() {
    return (
        <div className={'appDiv'}>
            <UserSelectComponent />
            <Posts/>
        </div>
    );
}