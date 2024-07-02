import axios from "axios";
import { useEffect, useState } from "react";
import CancelIcon from '@mui/icons-material/Cancel';
const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isDesktop;
};

const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const Watchlist = ()=>{
    const ENDPOINT = "http://127.0.0.1:5000/";
  const apiKey = "a07b4300034190175d95a527a3a11dc4";
  const endpoint = "https://api.themoviedb.org/3/";
  const [movies, setMovies] = useState([]);
  const [isError, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [isVisible, setVisible] = useState(false);
  const isDesktop = useIsDesktop()

  const showMessage = async (msg) => {
    setMessage(msg);
    setVisible(true);
    await sleep(3000);
    setVisible(false);
  };

  const removeFromWatchlist = async (id) => {
    try {
      const res = await axios.post(`${ENDPOINT}remove-from-watchlist/1/${id}`);
      if (res.status === 200) {
        setError(false);
        setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
        showMessage("Movie Removed from favourite!");
      }
    } catch (err) {
      setError(true);
      console.error("Error removing from favourites:", err);
      showMessage(err.message || "An error occurred while removing the movie from favourites.");
    }
  };

  const getMovieid = async () => {
    try {
      const res = await axios.get(`${ENDPOINT}get-watchlist/1`);
      const movieIds = res.data.watchlist_movies.map((movie) => movie.movie_id);
      getMovies(movieIds);
    } catch (error) {
      console.error("Error fetching favourite movies:", error);
    }
  };

  
  const getMovies = async (ids) => {
    try {
      const moviePromises = ids.map(async (id) => {
        const res = await axios.get(`${endpoint}movie/${id}?api_key=${apiKey}&append_to_response=videos,credits`);
        return res.data;
      });
      const movieData = await Promise.all(moviePromises);
      setMovies(movieData);
    } catch (error) {
      console.error("Error fetching movie details:", error);
    }
  };

  useEffect(() => {
    getMovieid();
  }, []);

  return (
    <div className="main-dash">
      {movies.length === 0 ? (
        <div className="empty-message">
          <h2>Nothing is in watchlist</h2>
          <p>Add movies to get started</p>
          <a href="/" id="btn-home">Home</a>
        </div>
      ) : (
        movies.map((movie) => (
          <div key={movie.id} className="fav-dash">
            <a href={`/movie/${movie.title.replace(/\s+/g, '-')}/${movie.id}`} className="fav-dash" style={{width:"100%"}}>
              <img src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`} alt={movie.title} />
              <div className="fav-details">
                <div className="fav-title">
                  <span>{movie.title}</span>
                  <CancelIcon
                    onClick={(e) => {
                      e.preventDefault(); // Prevent the default anchor behavior
                      e.stopPropagation(); // Stop the event from bubbling up
                      removeFromWatchlist(movie.id);
                    }}
                    style={{ zIndex: "1" }}
                  />
                </div>
                <p>{isDesktop ? movie.overview : `${movie.overview.slice(0, 256)}...`}</p>
              </div>
            </a>
          </div>
        ))
      )}
      <div className="message-remove" style={{ display: isVisible ? "block" : "none", backgroundColor: isError ? "red" : "green" }}>
        <span>{message}</span>
      </div>
    </div>
  );
}
export default Watchlist