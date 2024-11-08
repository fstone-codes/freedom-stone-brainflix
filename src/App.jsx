import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { baseUrl } from "./utils.js";
import axios from "axios";
import VideoDetailsPage from "./pages/VideoDetailsPage/VideoDetailsPage";
import VideoUploadPage from "./pages/VideoUploadPage/VideoUploadPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import Header from "./components/Header/Header";

function App() {
    // store the condensed video data (not including comments, etc.)
    // update upon page load
    const [videoQueue, setVideoQueue] = useState(null);

    // fetch condensed data for all videos
    const getVideoQueueData = async () => {
        try {
            const { data } = await axios.get(`${baseUrl}/videos`);
            setVideoQueue(data);
        } catch (error) {
            console.error("You have an error:", error);
        }
    };

    // fetch data for videoQueue only once upon page loading
    useEffect(() => {
        getVideoQueueData();
    }, []);

    // guard jsx component from rendering if no data stored in the videoQueue variable
    if (!videoQueue) {
        return <div>Loading video queue...</div>;
    }

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<VideoDetailsPage videoQueue={videoQueue} />} />
                <Route
                    path="video/:videoId"
                    element={<VideoDetailsPage videoQueue={videoQueue} />}
                />
                <Route
                    path="upload"
                    element={<VideoUploadPage getVideoQueueData={getVideoQueueData} />}
                />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
