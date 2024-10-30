import "./QueueItem.scss";
import { Link } from "react-router-dom";

function QueueItem({ id, image, title, channel }) {
    return (
        <li className="queue__item">
            <Link to={`/video/${id}`}>
                <div className="queue__image-container">
                    <img className="queue__image" src={image} alt={`${title} video poster`} />
                </div>
                <div className="queue__container">
                    <p className="queue__title">{title}</p>
                    <p className="queue__name">{channel}</p>
                </div>
            </Link>
        </li>
    );
}

export default QueueItem;
