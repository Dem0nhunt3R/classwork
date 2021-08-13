import './User.css';

import Address from "../address/Address";
import Company from "../company/Company";
import Posts from "../posts/Posts";


export default function User({item, item: {address}, item: {company}, userId = item.id}) {
    return (
        <div className={'UserDiv'}>
            <h2> #{item.id} {item.name}, Username: {item.username}, email:{item.email}</h2>
            <h2>phone: {item.phone}, website: {item.website}</h2>
            <Address address={address}/>
            <Company company={company}/>
            <div className={`user-posts`}>
                <h3>Posts of {item.name}</h3>
                <h4><Posts userId={userId}/></h4>
            </div>
        </div>
    );
}