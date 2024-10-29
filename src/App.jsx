import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import videoData from "./data/video-details.json";
import HomePage from "./pages/HomePage/HomePage";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";

function App() {
    const [currentVideo, setCurrentVideo] = useState(videoData[0]);

    const videos = videoData.filter((videoItem) => videoItem !== currentVideo);

    // const handleClick = (videoId) => {
    //     const clickedVideo = videos.find((videoItem) => videoItem.id === videoId);
    //     setCurrentVideo(clickedVideo);
    // };

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route
                    path="/"
                    element={<HomePage videos={videos} currentVideo={currentVideo} />}
                />
                <Route
                    path="video/:videoId"
                    element={<VideoDetailsPage videos={videos} currentVideo={currentVideo} />}
                />
                <Route path="upload" element={<VideoUploadPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
