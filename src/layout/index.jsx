import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import "./style.css";

const Layout = () => {
  return (
    <div className="layout">
      <div className="layout__nav">
        <Navigation />
      </div>
      <div className="layout__content">
        <Outlet />
      </div>
      <div className="layout__footer">
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
