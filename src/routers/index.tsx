import {
    
    Routes,
    Route
  } from "react-router-dom";
import { Home, Login, NewPost, Register, Setting } from "../pages";
import Profile from "../pages/Profile";



const Router = () => {
    return (
        <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/newpost" element={<NewPost />} />
    </Routes>
    )
}

export default Router
