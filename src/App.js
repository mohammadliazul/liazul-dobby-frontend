import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentications from "./pages/Authentications";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Authentications />} />
            <Route path="/signup" element={<Authentications />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
