import "./QueueItem.scss";

function QueueItem({ id, image, title, channel, handleClick }) {
    return (
        <li
            className="queue__item"
            onClick={() => {
                handleClick(id);
            }}
        >
            <div className="queue__image-container">
                <img className="queue__image" src={image} />
            </div>
            <div className="queue__container">
                <p className="queue__title">{title}</p>
                <p className="queue__name">{channel}</p>
            </div>
        </li>
    );
}

export default QueueItem;
