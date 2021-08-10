import UserAddress from "../user address/UserAddress";

export default function User({
                                 id,
                                 name,
                                 username,
                                 email,
                                 address,
                                 phone,
                                 website,
                                 company: {companyName, catchPhrase, bs}
                             }) {
    return (
        <div>
            <div className={`user`}>
                <h1>name: {name}, username: {username}</h1>
                <h2>id: {id}, email: {email}, phone: {phone}, website:{website}</h2>
                <div className={`user_address`}>
                    <UserAddress {...address}/>

                </div>
                <div>
                    <h2>Company: {companyName}</h2>
                    <h3>{catchPhrase}</h3>
                    <h3>{bs}</h3>
                </div>
                <hr/>
            </div>

        </div>
    );
}