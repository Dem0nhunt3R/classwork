import './Address.css';

import Geo from "../geo/Geo";

export default function Address({address, address: {street, suite, city, zipcode, geo}}) {
    return (
        <div className={'address-div'}>
            <h3>Address:</h3>
            <h3>street - {street}</h3>
            <h3>suite - {suite}</h3>
            <h3>city - {city}</h3>
            <h3>zipcode - {zipcode}</h3>
            <Geo geo={geo}/>
        </div>
    );
}