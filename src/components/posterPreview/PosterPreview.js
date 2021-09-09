const posterUrl = 'https://image.tmdb.org/t/p/w400';

export default function PosterPreview({posterPath}) {

  return (
      <img src={posterUrl+posterPath} alt=""/>
  );
}