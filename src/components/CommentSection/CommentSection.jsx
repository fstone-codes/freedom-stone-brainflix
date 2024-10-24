import "./CommentSection.scss";
import CommentItem from "../CommentItem/CommentItem";
import avatar from "../../assets/images/Mohan-muruge.jpg";
import commentIcon from "../../assets/icons/upload.svg";

function CommentSection() {
    return (
        <section className="comments">
            <p className="comments__subtitle"></p>
            <div className="comments__form-container">
                <div className="comments__image-container">
                    <img className="comments__image" src={avatar} />
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
                <CommentItem />
                <CommentItem />
                <CommentItem />
            </ul>
        </section>
    );
}

export default CommentSection;
