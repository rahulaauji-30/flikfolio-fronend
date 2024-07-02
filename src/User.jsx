import axios from "axios";
import { useEffect, useState } from "react";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";

const User = () => {
  const ENDPOINT = "http://127.0.0.1:5000/";
  const [user, setUser] = useState([]);
  const [hover, setHover] = useState(false);

  const getUser = async () => {
    try {
      const res = await axios.get(`${ENDPOINT}get/user/`);
      setUser(res.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Create a FormData object to send the file
    const formData = new FormData();
    formData.append("photo", file);

    try {
      const res = await axios.post(`${ENDPOINT}upload-profile-pic/1`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      // Update the user photo URL after a successful upload
      setUser((prevUser) => ({ ...prevUser, photo: res.data.photo }));
    } catch (err) {
      console.error("Error uploading the photo:", err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div className="user-profile">
        <div
          className="profile-photo"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
        >
          <img
            src={user.photo ? user.photo : "https://images.unsplash.com/photo-1440589473619-3cde28941638?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"}
            alt={user.name}
          />
          {hover && (
            <>
              <div className="upload-overlay">
                <PhotoCameraIcon style={{ color: "white", fontSize: "50px" }} />
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '100%',
                  height: '100%',
                  opacity: '0',
                  cursor: 'pointer',
                }}
              />
            </>
          )}
        </div>
        <h1>Hello, {user.name}</h1>
        <div className="links">
          <NavLink to="favourites">Favourite</NavLink>
          <NavLink to="watchlist">Watchlist</NavLink>
        </div>
      </div>
      <Outlet/>
    </>
  );
};

export default User;
