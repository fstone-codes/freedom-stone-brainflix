import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/video/:videoId" element={<VideoDetailsPage />} />
                <Route path="/upload" element={<VideoUploadPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
