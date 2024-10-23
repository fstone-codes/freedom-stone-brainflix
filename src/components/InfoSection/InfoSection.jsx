import "./InfoSection.scss";
import viewIcon from "../../assets/icons/views.svg";
import likeIcon from "../../assets/icons/likes.svg";

function InfoSection({ title, channel, timestamp, views, likes, description }) {
    return (
        <section className="info">
            <h1 className="info__title">{title}</h1>
            <div className="info__container">
                <div className="info__data-container">
                    <p className="info__data">By {channel}</p>
                    <p className="info__data">{timestamp}</p>
                </div>
                <div className="info__data-container">
                    <p className="info__data">
                        <img className="info__icon" src={viewIcon} />
                        {views}
                    </p>
                    <p className="info__data">
                        <img className="info__icon" src={likeIcon} />
                        {likes}
                    </p>
                </div>
            </div>
            <p className="info__description">{description}</p>
        </section>
    );
}

export default InfoSection;
