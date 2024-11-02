import "./Button.scss";
import { Link } from "react-router-dom";

function Button({ element: Element = "div", btnText, imgSrc, imgAlt, path }) {
    if (Element === "Link") {
        return (
            <Element className="btn" to={path}>
                <img className="btn__icon" src={imgSrc} alt={imgAlt} />
                {btnText}
            </Element>
        );
    }

    return (
        <Element className="btn">
            <img className="btn__icon" src={imgSrc} alt={imgAlt} />
            {btnText}
        </Element>
    );
}

export default Button;
