import "./Button.scss";
import { Link } from "react-router-dom";

// element: Element = "div"
// allows the jsx element to be passed to Button as a prop, not a variable
function Button({ element: Element = "div", btnText, imgSrc, imgAlt, path }) {
    // check if we want to redirect to another page
    if (Element === Link) {
        return (
            <Link className="btn" to={path}>
                <img className="btn__icon" src={imgSrc} alt={imgAlt} />
                {btnText}
            </Link>
        );
    }

    // otherwise, Button will have submitting functionality
    return (
        <Element className="btn">
            <img className="btn__icon" src={imgSrc} alt={imgAlt} />
            {btnText}
        </Element>
    );
}

export default Button;
