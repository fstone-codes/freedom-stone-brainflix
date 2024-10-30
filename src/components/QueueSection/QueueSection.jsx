import "./QueueSection.scss";
import QueueItem from "../QueueItem/QueueItem";
import { Link } from "react-router-dom";

function QueueSection({ videoQueue, handleClick }) {
    return (
        <section className="queue">
            <p className="queue__subtitle">NEXT VIDEOS</p>
            <ul className="queue__list">
                {videoQueue.map((video) => (
                    <Link key={video.id} to={`/video/${video.id}`}>
                        <QueueItem
                            id={video.id}
                            image={video.image}
                            title={video.title}
                            channel={video.channel}
                            handleClick={handleClick}
                        />
                    </Link>
                ))}
            </ul>
        </section>
    );
}

export default QueueSection;
