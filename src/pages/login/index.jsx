import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase-config";
import Spinner from "../../components/Spinner";
import CustomInput from "../../components/customInput/CustomInput";
import Dice from "../../assets/images/dice.svg";
import Eye from "../../assets/images/eye.svg";
import "./style.css";

const Login = () => {
  const [togglePassword, setTogglePassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();

  const handletogglePassword = () => {
    setTogglePassword(!togglePassword);
  };

  const login = async (e) => {
    e.preventDefault();

    if (email === "") {
      alert("Please enter your email");
      return;
    }

    if (password === "") {
      alert("Please enter your password");
      return;
    }

    setLoader(true);

    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      console.log(user);
      setLoader(false);
      navigate("/home");
    } catch (error) {
      setLoader(false);
      alert("Please, enter correct email and password");
    }
  };

  return (
    <div className="login">
      <div className="login_box">
        <img src={Dice} alt="Logo" />
        <h1>Hi, Welcome</h1>
        <span>Please sign-up to start your experience</span>
        <form className="loginForm">
          <div>
            <div>
              <CustomInput
                type="text"
                placeholder="Email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required="required"
              />
            </div>
            <div login__password-box>
              <CustomInput
                type={togglePassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required="required"
              />
              <img
                src={Eye}
                alt="Toggle Passoword"
                className="eye-icon"
                onClick={handletogglePassword}
              />
            </div>
          </div>

          <button className="btn" onClick={login}>
            Login
          </button>
        </form>
      </div>
      {loader && <Spinner />}
    </div>
  );
};

export default Login;
