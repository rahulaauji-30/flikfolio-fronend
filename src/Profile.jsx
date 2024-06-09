import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
const Profile = (props)=>{

    return(<>
        {
            props.src == null ? <PersonIcon style={{backgroundColor:"lightgray",borderRadius:"50%"}} sx={{ width: 80, height: 80 }}/>:<Avatar alt="Remy Sharp" src={`https://image.tmdb.org/t/p/w400/${props.src}`} sx={{ width: 80, height: 80 }}/>
        }
    </>)
}
export default Profile;