import {
  Route, Routes
} from "react-router-dom";
import { Home, Login, NewPost, PostDetail, Profile, Register, Setting } from "../pages";

const Router = () => {
    return (
        <Routes>
      <Route path="/" element={<Home />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/posts" element={<NewPost />} />
        <Route path="/posts/:id" element={<PostDetail />} />
    </Routes>
    )
}

export default Router
