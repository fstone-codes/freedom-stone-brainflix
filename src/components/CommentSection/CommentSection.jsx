import "./CommentSection.scss";
import CommentItem from "../CommentItem/CommentItem";

function CommentSection() {
    return (
        <section>
            <p></p>
            <form>
                <div>
                    <img />
                </div>
                <label>
                    <textarea></textarea>
                </label>
                <button></button>
            </form>
            <ul>
                <CommentItem />
                <CommentItem />
                <CommentItem />
            </ul>
        </section>
    );
}

export default CommentSection;
