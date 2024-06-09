import { useState } from "react";
import Moviesearch from "./Moviesearch";

const Navsearch = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [isClicked,setClicked] = useState(false)
    const handleClick = ()=>{
        setClicked((pre)=>!pre)
    }
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

    return (
        <>
            <div className="navbar">
                <h1 style={{ margin: "0px", textAlign: "center" }}>FlickFolio</h1>
                <input
                    type="text"
                    name="search"
                    id="movieSearch"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Search for a movie..."
                    focus
                />
                <div className="side-nav">
                    <a href="#search" id="search">Search</a>
                    <button onClick={handleClick} id="register">Register</button>
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
            <div className="register" style={{display:isClicked ? "hidden":"block"}}>
                <a href="/login">Log In</a>
                <br />
                <a href="/signup">Sign Up</a>
            </div>
        </>
    );
};

export default Navsearch;
