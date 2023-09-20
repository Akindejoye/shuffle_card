import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const Navigation = () => {
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
        <div className="navigation__left-symbol"></div>
        <span className="navigation-logo">sf.game</span>
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
        {/* <button className="navigation__right-sign-in">Sign in</button> */}
      </div>
    </div>
  );
};

export default Navigation;
