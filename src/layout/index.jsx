import { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./../firebase-config";
import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import "./style.css";

const Layout = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const logOut = async () => {
    await signOut(auth);
  };

  const userEmail = user?.email;

  return (
    <div className="layout">
      <div className="layout__nav">
        <Navigation userEmail={userEmail} logOut={logOut} />
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
