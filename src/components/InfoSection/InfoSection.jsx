import "./InfoSection.scss";
import likeIcon from "../../assets/icons/likes.svg";
import viewIcon from "../../assets/icons/views.svg";

function InfoSection({ convertTime, title, channel, timestamp, views, likes, description }) {
    return (
        <section className="info">
            <h1 className="info__title">{title}</h1>
            <div className="info__container">
                <div className="info__data-container">
                    <p className="info__name">By {channel}</p>
                    <p className="info__data">{convertTime(timestamp)}</p>
                </div>
                <div className="info__data-container">
                    <p className="info__data">
                        <img className="info__icon" src={viewIcon} alt="view icon" />
                        {views}
                    </p>
                    <p className="info__data">
                        <img className="info__icon" src={likeIcon} alt="like icon" />
                        {likes}
                    </p>
                </div>
            </div>
            <p className="info__description">{description}</p>
        </section>
    );
}

export default InfoSection;
