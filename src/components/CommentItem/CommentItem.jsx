import "./CommentItem.scss";

function CommentItem({ name, timestamp, comment }) {
    function convertTime(timestamp) {
        let submissionDate = new Date(timestamp);
        let formattedDate = submissionDate.toLocaleDateString("en-US", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
        });

        return formattedDate;
    }

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
