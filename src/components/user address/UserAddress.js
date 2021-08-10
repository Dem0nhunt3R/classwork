import UserAddressGeo from "../userAddressGeo/UserAddressGeo";

export default function UserAddress({street,suite,city,zipcode,geo}) {
  return (
    <div className={`user-address`}>
        <h2>Address:</h2>
        <h3>street: {street}</h3>
        <h3>suite: {suite}</h3>
        <h3>city: {city}</h3>
        <h3>zipcode: {zipcode}</h3>
        <div className={`user_address__geo`}>
            <UserAddressGeo {...geo}/>
        </div>
    </div>
  );
}