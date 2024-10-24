import "./App.scss";
import Header from "./components/Header/Header";
import Video from "./components/Video/Video";
import InfoSection from "./components/InfoSection/InfoSection";
import CommentSection from "./components/CommentSection/CommentSection";
import QueueSection from "./components/QueueSection/QueueSection";
import videoDetails from "./data/video-details.json";
import { useState } from "react";

function App() {
    const [commentList, setCommentList] = useState(videoDetails[0].comments);

    return (
        <>
            <Header />
            <main>
                <Video />
                <InfoSection
                    title={videoDetails[0].title}
                    channel={videoDetails[0].channel}
                    timestamp={videoDetails[0].timestamp}
                    views={videoDetails[0].views}
                    likes={videoDetails[0].likes}
                    description={videoDetails[0].description}
                />
                <CommentSection passedCommentList={commentList} />
                <QueueSection />
            </main>
        </>
    );
}

export default App;
