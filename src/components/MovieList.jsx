import Movie from './Movie';

const pStyle = {
  fontSize: '2.5rem',
  marginTop: '50px',
  textAlign: 'center',
  width: '100%',
  display: 'block',
};

export default function MovieList({ movies, onSelectMovie }) {
  return (
    <ul className='list list-movies'>
      {movies.length === 0 ? (
        <p style={pStyle}>Start by searching movies 🎞️</p>
      ) : null}

      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie} />
      ))}
    </ul>
  );
}
