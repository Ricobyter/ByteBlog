import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from './pages/MainPage'
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path="/" element={<MainPage />} />
  <Route path="/login" element={<Login />} />
  <Route path="/register" element={<Register />} />
</Routes>
</BrowserRouter>
  );
}

export default App;
