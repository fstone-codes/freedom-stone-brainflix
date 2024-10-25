import "./CommentSection.scss";
import CommentItem from "../CommentItem/CommentItem";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/icons/add_comment.svg";

function CommentSection({ commentList }) {
    return (
        <section className="comments">
            <p className="comments__subtitle">{commentList.length} Comments</p>
            <div className="comments__form-container">
                <div className="avatar">
                    <img className="avatar__image" src={avatar} />
                </div>
                <form className="comments__form">
                    <label className="comments__label">
                        JOIN THE CONVERSATION
                        <textarea
                            className="comments__input"
                            name="comment"
                            placeholder="Add a new comment"
                        ></textarea>
                    </label>
                    <button className="btn">
                        <img className="btn__icon" src={commentIcon} />
                        COMMENT
                    </button>
                </form>
            </div>
            <ul className="comments__list">
                {commentList.map((commentItem) => (
                    <CommentItem
                        key={commentItem.id}
                        name={commentItem.name}
                        timestamp={commentItem.timestamp}
                        comment={commentItem.comment}
                    />
                ))}
            </ul>
        </section>
    );
}

export default CommentSection;
