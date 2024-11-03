import "./CommentItem.scss";

function CommentItem({ convertTime, name, timestamp, comment }) {
    return (
        <li className="comments__item">
            <div className="avatar"></div>
            <div className="comments__content-container">
                <div className="comments__details-container">
                    <p className="comments__name">{name}</p>
                    <p className="comments__date">{convertTime(timestamp)}</p>
                </div>
                <p className="comments__comment">{comment}</p>
            </div>
        </li>
    );
}

export default CommentItem;
