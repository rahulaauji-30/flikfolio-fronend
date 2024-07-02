import { useState, useEffect } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import axios from "axios";

const Icons = (props) => {
  const [isFavourite, setFavourite] = useState(false);
  const [isSaved, setSaved] = useState(false);
  const [isExpanded, setExpanded] = useState(false);
  const ENDPOINT = "http://127.0.0.1:5000/";

  const addFavourite = async () => {
    try {
      await axios.post(`${ENDPOINT}add-to-favourite/${props.userid}/${props.movieid}`);
      console.log("Added to favourite");
      setFavourite(true);
    } catch (err) {
      console.log(err);
    }
  };

  const removeFavourite = async () => {
    try {
      await axios.post(`${ENDPOINT}remove-from-favourite/${props.userid}/${props.movieid}`);
      console.log("Removed from favourite");
      setFavourite(false);
    } catch (err) {
      console.log(err);
    }
  };

  const addWatchlist = async () => {
    try {
      await axios.post(`${ENDPOINT}add-to-watchlist/${props.userid}/${props.movieid}`);
      console.log("Added to watchlist");
      setSaved(true);
    } catch (err) {
      console.log(err);
    }
  };

  const removeWatchlist = async () => {
    try {
      await axios.post(`${ENDPOINT}remove-from-watchlist/${props.userid}/${props.movieid}`);
      console.log("Removed from watchlist");
      setSaved(false);
    } catch (err) {
      console.log(err);
    }
  };

  const getFavourite = async () => {
    try {
      const res = await axios.get(`${ENDPOINT}get-favourites/${props.userid}`);
      const favourites = res.data.favourite_movies;
      favourites.forEach((favorite) => {
        if (parseInt(favorite.movie_id) == parseInt(props.movieid)) {
          setFavourite(true);
        }
      });
    } catch (error) {
      console.error("Error fetching favourites:", error);
    }
  };

  const getWatchlist = async () => {
    try {
      const res = await axios.get(`${ENDPOINT}get-watchlist/${props.userid}`);
      const saved = res.data.watchlist_movies;
      saved.forEach((save) => {
        if (parseInt(save.movie_id) == parseInt(props.movieid)) {
          setSaved(true);
        }
      });
    } catch (error) {
      console.error("Error fetching watchlist:", error);
    }
  };

  const handleExpand = () => {
    setExpanded((pre) => !pre);
  };

  useEffect(() => {
    getFavourite();
    getWatchlist();
  }, [props.userid, props.movieid]);

  return (
    <>
      <div className="icons">
        {isFavourite ? (
          <FavoriteIcon
            fontSize="large"
            style={{ color: "red" }}
            onClick={removeFavourite}
          />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            style={{ color: "white" }}
            onClick={addFavourite}
          />
        )}
        {isSaved ? (
          <BookmarkIcon
            fontSize="large"
            style={{ color: "white" }}
            onClick={removeWatchlist}
          />
        ) : (
          <BookmarkBorderIcon
            fontSize="large"
            style={{ color: "white" }}
            onClick={addWatchlist}
          />
        )}
      </div>
    </>
  );
};

export default Icons;
