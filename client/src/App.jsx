import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage'
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserProfile from "./pages/user/UserProfile";
import UserSecurity from "./pages/user/UserSecurity";
import UserWorks from "./pages/user/UserWorks";
import PostPage from "./pages/post/PostPage";

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<MainPage />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
  <Route path="/profile" element={<UserProfile />} />
  <Route path="/usersecurity" element={<UserSecurity />} />
  <Route path="/userworks" element={<UserWorks />} />
  <Route path="/postpage" element={<PostPage />} />
</Routes>
</BrowserRouter>
  );
}

export default App;
