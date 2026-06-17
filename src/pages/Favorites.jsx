import '../css/favorites.css'
import {useMovieContext} from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'
function Favorites(){
    const {favorites} = useMovieContext()

    if (favorites) {
        return(
        <div className="favorites">
             <h2>Your Favorite Movies</h2>
         <div className= "movie-grid">
            {favorites.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
        </div>  
        )
    }
    return (
    <div className="Favorites-empty">
        No favorite movies yet.
        <p>Start adding movies to your favorites and they will appear here!</p>
        </div>
    );
}

export default Favorites