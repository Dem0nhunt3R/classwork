import StarRatings from 'react-star-ratings';

export default function StarsRating({rating}) {
    return (
        <StarRatings
            rating={rating}
            numberOfStars={10}
            starDimension="20px"
            starSpacing="10px"
            starRatedColor="gold"
            starEmptyColor="darkgrey"
        />
    );
}
