import "./CommentItem.scss";

function CommentItem() {
    return (
        <li className="comments__item">
            <div className="comments__image-container">
                <img className="comments__image" />
            </div>
            <div className="comments__details-container">
                <p className="comments__name"></p>
                <p className="comments__date"></p>
            </div>
            <p className="comments__comment"></p>
        </li>
    );
}

export default CommentItem;
