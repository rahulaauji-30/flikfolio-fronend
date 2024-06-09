import { useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
const Icons = () => {
    const [isFavourite, setFavourite] = useState(false);
    const [isSaved, setSaved] = useState(false);
    const [isExpanded, setExpanded] = useState(false);
    const handleFavourite = () => {
        setFavourite((pre) => !pre)
    }
    const handleExpand = () => {
        setExpanded((pre) => !pre)
    }
    const handleSave = () => {
        setSaved((pre) => !pre)
    }

    return (
        <>
            <div className="icons">
                {
                    isFavourite ? <FavoriteIcon fontSize="large" style={{ color: "red" }} onClick={handleFavourite} /> : <FavoriteBorderIcon fontSize="large" style={{ color: "white" }} onClick={handleFavourite} />
                }
                {
                    isSaved ? <BookmarkIcon fontSize="large" style={{ color: "white" }} onClick={handleSave} /> : <BookmarkBorderIcon fontSize="large" style={{ color: "white" }} onClick={handleSave} />
                }
            </div>
        </>
    )
}
export default Icons;