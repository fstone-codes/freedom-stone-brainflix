import "./CommentItem.scss";

function CommentItem({ name, timestamp, comment }) {
    function convertTime(timestamp) {
        let timeDiff = Date.now() - timestamp;
        let calculatedDiff;
        let formattedDate;

        if (timeDiff < 60000) {
            calculatedDiff = Math.floor(timeDiff / 1000);
            if (calculatedDiff === 1) {
                formattedDate = `${calculatedDiff} second ago`;
            } else {
                formattedDate = `${calculatedDiff} seconds ago`;
            }
        } else if (timeDiff >= 60000 && timeDiff < 3600000) {
            calculatedDiff = Math.floor(timeDiff / 60000);
            if (calculatedDiff === 1) {
                formattedDate = `${calculatedDiff} minute ago`;
            } else {
                formattedDate = `${calculatedDiff} minutes ago`;
            }
        } else if (timeDiff >= 3600000 && timeDiff < 86400000) {
            calculatedDiff = Math.floor(timeDiff / 3600000);
            if (calculatedDiff === 1) {
                formattedDate = `${calculatedDiff} hour ago`;
            } else {
                formattedDate = `${calculatedDiff} hours ago`;
            }
        } else if (timeDiff >= 86400000 && timeDiff < 604800000) {
            calculatedDiff = Math.floor(timeDiff / 86400000);
            if (calculatedDiff === 1) {
                formattedDate = `${calculatedDiff} day ago`;
            } else {
                formattedDate = `${calculatedDiff} days ago`;
            }
        } else {
            let submissionDate = new Date(timestamp);
            formattedDate = submissionDate.toLocaleDateString("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
            });
        }
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
