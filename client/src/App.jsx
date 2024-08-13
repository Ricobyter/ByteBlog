import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import UserProfile from "./pages/user/UserProfile";
import UserSecurity from "./pages/user/UserSecurity";
import UserWorks from "./pages/user/UserWorks";
import UserBookmarks from "./pages/user/UserBookmarks.jsx";
import PostPage from "./pages/post/PostPage";
import store from "./store/store.js";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CreatePost from "./pages/CreatePost.jsx";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/usersecurity" element={<UserSecurity />} />
          <Route path="/userworks" element={<UserWorks />} />
          <Route path="/postpage" element={<PostPage />} />
          <Route path="/userbookmarks" element={<UserBookmarks />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
        <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
