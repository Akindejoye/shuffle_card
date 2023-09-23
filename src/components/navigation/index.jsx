import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";

const Navigation = ({ userEmail, logOut }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();

  // const handleSearch = (event) => {
  //   event.preventDefault();
  //   navigate(`/home?q=${searchQuery}`);
  //   setSearchQuery("");
  // };

  const handleSearchChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Navigate immediately for non-empty queries
    if (query) {
      navigate(`/home?q=${query}`);
    } else {
      // Navigate to home if the query is empty
      navigate("/home");
    }
  };

  // Handle empty search
  // useEffect(() => {
  //   if (!searchQuery) {
  //     navigate("/home");
  //   }
  // }, [searchQuery, navigate]);

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
        <form
          className="navigation__right-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="text"
            className="navigation__right-input"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
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
