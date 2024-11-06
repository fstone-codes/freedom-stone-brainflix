import "./VideoDetailsPage.scss";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { baseUrl } from "../../utils";
import axios from "axios";
import CommentSection from "../../components/CommentSection/CommentSection";
import InfoSection from "../../components/InfoSection/InfoSection";
import QueueSection from "../../components/QueueSection/QueueSection";
import Video from "../../components/Video/Video";

function VideoDetailsPage({ videoQueue }) {
    // store the entire current video data (including comments, etc.)
    // update when another video queue item is clicked on
    const [currentVideo, setCurrentVideo] = useState(null);
    // store the comment data only for the current video
    // update when another video queue item is clicked on
    const [comments, setComments] = useState(null);
    // create variable from the dynamic url segment
    const { videoId } = useParams();

    // if videoId is null/undefined, id variable will be set to the id value of the first video in videoQueue array
    const id = videoId ?? videoQueue[0].id;

    // remove the current video from the queue list of videos
    const revisedVideoQueue = videoQueue.filter(
        (video) => video.id !== (videoId || videoQueue[0].id)
    );

    // fetch data for current video + comments
    const getSingleVideoData = async (id) => {
        try {
            const { data } = await axios.get(`${baseUrl}/videos/${id}`);
            setCurrentVideo(data);
            setComments(data.comments);
        } catch (error) {
            console.error("You have an error:", error);
        }
    };

    // when videoId variable is updated/changed, fetch data for corresponding video
    useEffect(() => {
        getSingleVideoData(id);
    }, [videoId]);

    // guard jsx component from rendering if no data stored in the currentVideo variable
    if (!currentVideo) {
        return <div>Loading video...</div>;
    }

    // convert timestamp to human-readable format
    function convertTime(timestamp) {
        let timeDiff = Date.now() - timestamp;
        let calculatedDiff;
        let formattedDate;

        if (timeDiff < 60000) {
            calculatedDiff = Math.floor(timeDiff / 1000);
            if (calculatedDiff === 1) {
                formattedDate = `${calculatedDiff} second ago`;
            } else {
                formattedDate = `${calculatedDiff} seconds ago`;
            }
        } else if (timeDiff >= 60000 && timeDiff < 3600000) {
            calculatedDiff = Math.floor(timeDiff / 60000);
            if (calculatedDiff === 1) {
                formattedDate = `${calculatedDiff} minute ago`;
            } else {
                formattedDate = `${calculatedDiff} minutes ago`;
            }
        } else if (timeDiff >= 3600000 && timeDiff < 86400000) {
            calculatedDiff = Math.floor(timeDiff / 3600000);
            if (calculatedDiff === 1) {
                formattedDate = `${calculatedDiff} hour ago`;
            } else {
                formattedDate = `${calculatedDiff} hours ago`;
            }
        } else if (timeDiff >= 86400000 && timeDiff < 604800000) {
            calculatedDiff = Math.floor(timeDiff / 86400000);
            if (calculatedDiff === 1) {
                formattedDate = `${calculatedDiff} day ago`;
            } else {
                formattedDate = `${calculatedDiff} days ago`;
            }
        } else {
            let submissionDate = new Date(timestamp);
            formattedDate = submissionDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            });
        }
        return formattedDate;
    }

    return (
        <main className="main">
            <Video currentVideo={currentVideo} />
            <div className="main__container">
                <div className="main__content-container">
                    <InfoSection
                        convertTime={convertTime}
                        title={currentVideo.title}
                        channel={currentVideo.channel}
                        timestamp={currentVideo.timestamp}
                        views={currentVideo.views}
                        likes={currentVideo.likes}
                        description={currentVideo.description}
                    />
                    <CommentSection
                        commentList={comments}
                        convertTime={convertTime}
                        getSingleVideoData={getSingleVideoData}
                        id={currentVideo.id}
                    />
                </div>
                <div className="main__queue-container">
                    <QueueSection videoQueue={revisedVideoQueue} />
                </div>
            </div>
        </main>
    );
}

export default VideoDetailsPage;
