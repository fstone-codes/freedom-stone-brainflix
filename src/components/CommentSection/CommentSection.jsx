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
                    <img className="avatar__image" src={avatar} alt="user avatar" />
                </div>
                <form className="comments__form">
                    <label className="comments__label" htmlFor="comment">
                        JOIN THE CONVERSATION
                        <textarea
                            className="comments__input"
                            name="comment"
                            id="comment"
                            placeholder="Add a new comment"
                        ></textarea>
                    </label>
                    <button className="btn">
                        <img className="btn__icon" src={commentIcon} alt="comment icon" />
                        COMMENT
                    </button>
                </form>
            </div>
            <ul className="comments__list">
                {commentList.map((comment) => (
                    <CommentItem
                        key={comment.id}
                        name={comment.name}
                        timestamp={comment.timestamp}
                        comment={comment.comment}
                    />
                ))}
            </ul>
        </section>
    );
}

export default CommentSection;
