import "./CommentItem.scss";
import likeIcon from "../../assets/icons/likes.svg";
import deleteIcon from "../../assets/icons/delete.svg";

function CommentItem({ convertTime, name, timestamp, comment, likes }) {
    return (
        <li className="comments__item">
            <div className="avatar"></div>
            <div className="comments__content-container">
                <div className="comments__details-container">
                    <p className="comments__name">{name}</p>
                    <p className="comments__date">{convertTime(timestamp)}</p>
                </div>
                <p className="comments__comment">{comment}</p>
                <div className="comments__icon-container">
                    <div className="comments__like-container">
                        <img className="comments__like" src={likeIcon} alt="like icon" />
                        {likes}
                    </div>
                    <img className="comments__delete" src={deleteIcon} alt="delete icon" />
                </div>
            </div>
        </li>
    );
}

export default CommentItem;
