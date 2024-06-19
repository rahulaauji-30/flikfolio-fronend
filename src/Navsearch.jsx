import { useEffect, useState } from "react";
import Moviesearch from "./Moviesearch";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
const Navsearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [display,setDisplay] = useState(false)
    const handleSearchChange = async (event) => {
        const query = event.target.value;
        setSearchQuery(query);

        if (query.trim() === '') {
            setSearchResults([]);
            return;
        }

        const url = `https://api.themoviedb.org/3/search/movie?api_key=a07b4300034190175d95a527a3a11dc4&query=${query}`;
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            setSearchResults(data.results);
        } else {
            console.error('Error fetching search results');
        }
        if(searchResults == null){
            document.getElementsByTagName("h1").innerHTML = "No Movie Found"
        }
    };
    useEffect(()=>{
        const size = window.innerWidth;
      if(size > 786){
        setDisplay((pre)=>!pre);
      }
      console.log(size);
    },[window.innerWidth])
    return (
        <>
        <Helmet>
        {searchResults.map((movie) => (
          <React.Fragment key={movie.id}>
            <meta
              name={`description-title-${movie.id}`}
              content={movie.title}
            />
            <meta
              name={`description-overview-${movie.id}`}
              content={movie.overview}
            />
          </React.Fragment>
        ))}
      </Helmet>
            <div className="navbar">
                <h1 style={{ margin: "0px", textAlign: "center",display:display?"block":"none" }}>FlickFolio</h1>
                <input
                    type="text"
                    name="search"
                    id="movieSearch"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search for a movie..."
                    focus
                    autoComplete="false"
                />
                <div className="side-nav">
                    <Link to={`/`} id="search">Home</Link>
                    <a href="/signup" id="register">Register</a>
                </div>
            </div>
            <div className="result">
                {searchQuery.trim() === '' ? (
                    <h1 style={{margin:"0px auto"}}>Type to search</h1>
                ) : (
                    searchResults.map((movie) => (
                        <Moviesearch
                            key={movie.id}
                            id={movie.id}
                            poster={movie.poster_path}
                            title={movie.title}
                            rating={movie.vote_average}
                            release={movie.release_date}
                        />
                    ))
                )}
            </div>
        </>
    );
};

export default Navsearch;
