import "./QueueSection.scss";
import QueueItem from "../QueueItem/QueueItem";

function QueueSection({ videos, handleClick }) {
    return (
        <section className="queue">
            <p className="queue__subtitle">NEXT VIDEOS</p>
            <ul className="queue__list">
                {videos.map((video) => (
                    <QueueItem
                        key={video.id}
                        id={video.id}
                        image={video.image}
                        title={video.title}
                        channel={video.channel}
                        handleClick={handleClick}
                    />
                ))}
            </ul>
        </section>
    );
}

export default QueueSection;
