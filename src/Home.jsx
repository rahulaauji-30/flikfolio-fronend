import Movie from "./Movie"
import { useState,useEffect } from "react";
import { Helmet } from "react-helmet";
export default function Home() {
    const [movies, setMovies] = useState([]);
    const apiKey = "a07b4300034190175d95a527a3a11dc4";
    const endpoint = "https://api.themoviedb.org/3/";
    useEffect(() => {
        const fetchMovie = async () => {
          try {
            const response = await fetch(`${endpoint}trending/movie/week?api_key=${apiKey}&sort_by=release_date.desc`);
            if (!response.ok) {
              throw new Error('No response found');
            } else {
              const data = await response.json();
              setMovies(data.results);
            }
          } catch (err) {
            console.log(err);
          }
        };
    
        fetchMovie();
      }, []);
    return (<>
    <Helmet>
        {movies.map((movie) => (
                        <meta name={movie.title} content={movie.overview}/>
                    ))}
        </Helmet>
        <div className="cat">
            {/* <h1>Trending Now</h1> */}
            <div className="categories">
                {movies.map((movie) => (
                    <Movie id={movie.id} poster={movie.poster_path} title={movie.title} rating={movie.vote_average} release={movie.release_date} />
                ))}
            </div>
            {/* <h1>English</h1>
      <h1>Hindi</h1>
      <h1>Nepali</h1>
      <h1></h1> */}
        </div>
    </>)
}