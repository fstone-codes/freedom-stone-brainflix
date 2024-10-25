import "./QueueSection.scss";
import QueueItem from "../QueueItem/QueueItem";

function QueueSection({ queueList, handleClick }) {
    return (
        <section className="queue">
            <p className="queue__subtitle">NEXT VIDEOS</p>
            <ul className="queue__list">
                {queueList.map((queueItem) => (
                    <QueueItem
                        key={queueItem.id}
                        id={queueItem.id}
                        image={queueItem.image}
                        title={queueItem.title}
                        channel={queueItem.channel}
                        handleClick={handleClick}
                    />
                ))}
            </ul>
        </section>
    );
}

export default QueueSection;
