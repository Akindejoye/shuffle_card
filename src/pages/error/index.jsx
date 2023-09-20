import { Link } from "react-router-dom";
import Arrow from "../../assets/images/icon-long-right-arrow.svg";
import "./style.css";

const Error = () => {
  return (
    <div className="error-box">
      <div className="error">
        <h3>oops..</h3>
        <h1>404</h1>
        <h2>
          There's Nothing <br /> here...
        </h2>
        <h4>
          ...may be the page you're looking for is not found or never existed.
        </h4>
        <Link to="/" className="link">
          <button className="error-btn">
            <span>Back to home</span>
            <img src={Arrow} alt="Arrow Right" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
