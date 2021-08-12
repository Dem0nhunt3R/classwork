export default function Company({company, company: {name, catchPhrase, bs}}) {
    return (
        <div>
            <h3>Company: {name}.</h3>
            <h3>catchPhrase: {catchPhrase}.</h3>
            <h3>bs: {bs}.</h3>
        </div>
    );
}