import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import { Link, useNavigate } from "react-router-dom";
import CustomInput from "../../components/customInput/CustomInput";
import Spinner from "../../components/Spinner";
import Dice from "../../assets/images/dice.svg";
import Eye from "../../assets/images/eye.svg";
import "./style.css";

const Register = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const handletogglePassword = () => {
    setTogglePassword(!togglePassword);
  };

  const register = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      console.log(user);
      setLoader(false);
      navigate("/login");
    } catch (error) {
      setLoader(false);
      console.log(error);
      alert(error.message);
    }
  };

  return (
    <div className="register">
      <div className="register_box">
        <img src={Dice} alt="Logo" />
        <h1>Hi, Welcome</h1>
        <span>Please sign-in to your account and start your experience</span>
        <form className="regForm">
          <div>
            <CustomInput
              type="text"
              placeholder="Email"
              name="registerEmail"
              value={registerEmail}
              onChange={(e) => setRegisterEmail(e.target.value)}
            />
            <CustomInput
              type={togglePassword ? "text" : "password"}
              placeholder="Password"
              name="registerPassword"
              value={registerPassword}
              onChange={(e) => setRegisterPassword(e.target.value)}
            />

            <img
              src={Eye}
              alt="Toggle Passoword"
              onClick={handletogglePassword}
            />
          </div>
          <button className="btn" type="submit" onClick={register}>
            Register
          </button>
        </form>
        <div className="account">
          <p>Already have an account?</p>
          <button>
            <Link to="/login" className="link">
              Login
            </Link>
          </button>
        </div>
      </div>
      {loader && <Spinner />}
    </div>
  );
};

export default Register;
