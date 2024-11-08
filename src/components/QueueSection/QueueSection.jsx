import "./QueueSection.scss";
import { baseUrl } from "../../utils";
import QueueItem from "../QueueItem/QueueItem";

function QueueSection({ videoQueue }) {
    return (
        <section className="queue">
            <h2 className="queue__subtitle">NEXT VIDEOS</h2>
            <ul className="queue__list">
                {videoQueue.map((video) => (
                    <QueueItem
                        key={video.id}
                        id={video.id}
                        image={`${baseUrl}/${video.image}`}
                        title={video.title}
                        channel={video.channel}
                    />
                ))}
            </ul>
        </section>
    );
}

export default QueueSection;
