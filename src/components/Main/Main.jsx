import "./Main.scss";
import Video from "../Video/Video";
import InfoSection from "../InfoSection/InfoSection";
import CommentSection from "../CommentSection/CommentSection";
import QueueSection from "../QueueSection/QueueSection";

function Main({ currentVideo, commentList, fetchData, videoQueue }) {
    return (
        <main className="main">
            <Video currentVideo={currentVideo} />
            <div className="main__container">
                <div className="main__content-container">
                    <InfoSection
                        title={currentVideo.title}
                        channel={currentVideo.channel}
                        timestamp={currentVideo.timestamp}
                        views={currentVideo.views}
                        likes={currentVideo.likes}
                        description={currentVideo.description}
                    />
                    <CommentSection
                        commentList={commentList}
                        fetchData={fetchData}
                        id={currentVideo.id}
                    />
                </div>
                <div className="main__queue-container">
                    <QueueSection videoQueue={videoQueue} />
                </div>
            </div>
        </main>
    );
}

export default Main;
