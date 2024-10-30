import "./QueueSection.scss";
import QueueItem from "../QueueItem/QueueItem";

function QueueSection({ videoQueue }) {
    return (
        <section className="queue">
            <p className="queue__subtitle">NEXT VIDEOS</p>
            <ul className="queue__list">
                {videoQueue.map((video) => (
                    <QueueItem
                        key={video.id}
                        id={video.id}
                        image={video.image}
                        title={video.title}
                        channel={video.channel}
                    />
                ))}
            </ul>
        </section>
    );
}

export default QueueSection;
