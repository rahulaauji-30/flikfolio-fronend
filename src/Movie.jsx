import { useEffect, useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {Helmet} from 'react-helmet';

const Movie = (props) => {
    const [isVisible, setVisible] = useState(false);
    const [isFavourite, setFavourite] = useState(false);
    const [isSaved, setSaved] = useState(false);
    const [isExpanded, setExpanded] = useState(false);
    const showRead = {
        opacity: 1,
        transition: 'opacity 1s ease-in-out',
    }
    const apiKey = "a07b4300034190175d95a527a3a11dc4";
  const endpoint = "https://api.themoviedb.org/3/";
  
    const movie = {
            padding: "0px",
            backgroundColor: "rgb(0, 129, 90)",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            width: "400px",
          }
    const hanldeHover = () => {
        setVisible((pre) => !pre);
    }
    const handleFavourite = ()=>{
        setFavourite((pre)=>!pre)
    }
    const handleExpand = ()=>{
        setExpanded((pre)=>!pre)
    }
    const handleSave = ()=>{
        setSaved((pre)=>!pre)
    }
    useEffect(()=>{
        const fetchMovie = async () => {
            try {
              const response = await fetch(`${endpoint}trending/movie/week?api_key=${apiKey}&sort_by=release_date.desc`);
              if (!response.ok) {
                throw new Error('No response found');
              } else {
                const data = await response.json();
                // setMovies(data.results);
              }
            } catch (err) {
              console.log(err);
            }
          };
      
          fetchMovie();
    },[])

    return (
        <>
            <a href={`/movie/${props.id}`} id="mov">
              <div className="movie" key={props.id}>
                  <div className="movie-img" onMouseOver={hanldeHover} onMouseOut={hanldeHover}>
                      <div className="bg"></div>
                      <img src={`https://image.tmdb.org/t/p/w400/${props.poster}`} alt={props.title} />
                  </div>
                  <h3>{props.title}</h3>
                  <a href={`/movie/${props.id}`}>Read More</a>
              </div>
            </a>
        </>
    )
}
export default Movie;