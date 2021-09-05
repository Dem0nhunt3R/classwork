export default function GenreBadge({genres}) {
    return (
        <div>
            Genres: {
            genres.map(function (value, index) {
                if (index === genres.length - 1) {
                    return `${value.name}.`;
                }
                return ` ${value.name}, `;
            })
        }
        </div>
    );
}