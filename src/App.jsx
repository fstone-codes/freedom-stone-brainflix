import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseUrl, apiKey } from "./utils";
import axios from "axios";
import videoData from "./data/video-details.json";
import HomePage from "./pages/HomePage/HomePage";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";

function App() {
    // const [currentVideo, setCurrentVideo] = useState(videoData[0]);

    // const videos = videoData.filter((videoItem) => videoItem !== currentVideo);

    // const handleClick = (videoId) => {
    //     const clickedVideo = videos.find((videoItem) => videoItem.id === videoId);
    //     setCurrentVideo(clickedVideo);
    // };

    const [videoQueue, setVideoQueue] = useState(null);

    const getVideoQueueData = async () => {
        try {
            const { data } = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`);
            setVideoQueue(data);
        } catch (error) {
            console.error("You have an error:", error);
        }
    };

    useEffect(() => {
        getVideoQueueData();
        console.log(videoQueue);
    }, []);

    if (!videoQueue) {
        return <div>Loading...</div>;
    }

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage videoQueue={videoQueue} />} />
                <Route
                    path="video/:videoId"
                    element={<VideoDetailsPage videoQueue={videoQueue} />}
                />
                <Route path="upload" element={<VideoUploadPage />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
