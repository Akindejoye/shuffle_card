import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";

const Navigation = ({ userEmail, logOut }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/home?q=${searchQuery}`);
    setSearchQuery("");
  };

  return (
    <div className="navigation">
      <div className="navigation__left">
        <Link to="/home" className="link">
          <div className="navigation__left-symbol"></div>
        </Link>
        <Link to="/home" className="link">
          <span className="navigation-logo">sf.game</span>
        </Link>
      </div>
      <div className="navigation__right">
        <form className="navigation__right-form" onSubmit={handleSearch}>
          <input
            type="text"
            className="navigation__right-input"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </form>
        <button className="navigation__right-sign-in" onClick={logOut}>
          Sign out
        </button>
        <p className="naviation__userEmail">{userEmail}</p>
      </div>
    </div>
  );
};

export default Navigation;
