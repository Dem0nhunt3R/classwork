import MoviesPage from "./containers/MoviesPage";
import{
    BrowserRouter as Router,
} from "react-router-dom"

export default function App() {

    return (
        <Router>
            <div className={'appDiv'}>
                <MoviesPage></MoviesPage>
            </div>
        </Router>
    );
}