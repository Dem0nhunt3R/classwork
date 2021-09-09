import {Badge} from 'reactstrap';
import './GenreBadge.css'
import {Link} from "react-router-dom"

export const GenreBadge = ({genres}) => {
    return (
        <div className={'genreBadge'}>
            <Link><Badge>{genres.name}</Badge></Link>
        </div>
    );
}
