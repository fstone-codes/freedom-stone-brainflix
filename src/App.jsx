import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseUrl, apiKey } from "./utils.js";
import axios from "axios";
import HomePage from "./pages/HomePage/HomePage";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";

function App() {
    const [videoQueue, setVideoQueue] = useState(null);

    const getVideoQueueData = async () => {
        try {
            const { data } = await axios.get(`${baseUrl}/videos?api_key=${apiKey}`);
            setVideoQueue(data);
        } catch (error) {
            console.error("You have an error:", error);
        }
    };
    console.log(videoQueue);

    useEffect(() => {
        getVideoQueueData();
        console.log(videoQueue);
    }, []);

    if (!videoQueue) {
        return <div>Loading video queue...</div>;
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
