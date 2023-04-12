import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Sign.css";
import { AuthContext } from "../context/AuthenticationContext";
import { GeneralContext } from "../context/MainContext";
import menuIconBlack from "../Assets/icons/menuIconBlack.svg";
import showPasswordIcon from "./Icons/showPassword.svg";
import hidePasswordIcon from "./Icons/hidePassword.svg";

function SignIn() {
  const { signInExistingUser, changePage, setchangePage } =
    useContext(AuthContext);

  const location = useLocation();
  const { setmenuOpen } = useContext(GeneralContext);
  useEffect(() => {
    setmenuOpen(false);
  }, [location]);

  const navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let [emailNotFound, setemailNotFound] = useState(false);
  let [IncorrectPassword, setIncorrectPassword] = useState(false);

  const [isLoading, setisLoading] = useState(false);

  const signInUsers = async (e) => {
    e.preventDefault();

    try {
      await signInExistingUser(email, password);
    } catch (error) {
      console.log(error);
      if (error.message.substring(17) === "auth/user-not-found).") {
        console.log("User not found");
        setemailNotFound(true);
      }
      if (error.message.substring(17) === "auth/wrong-password).") {
        console.log("User not found");
        setIncorrectPassword(true);
      }
    }
    if (!emailNotFound || !IncorrectPassword) {
      navigate("/profilepage");
    }
  };

  let [showPassword, setshowPassword] = useState(false);

  return (
    <div id="signInContainer">
      <div className="signContainerInner">
        <section id="signupMenu">
          <img
            src={menuIconBlack}
            alt=""
            id="signupMenuIcon"
            onClick={() => setmenuOpen(true)}
          />
        </section>
        <section id="signinText">Login</section>
        <form action="submit" id="signinForm" onSubmit={(e) => signInUsers(e)}>
          <label htmlFor="emailInput" className="formItems">
            <div className="signinMiniText">Email</div>
            <input
              type="email"
              name="emailInput"
              id="emailInputsignIn"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailNotFound && <div className="errorTexts">Email not found</div>}
          </label>
          <label htmlFor="passwordInput" className="formItems">
            <div className="signinMiniText">Password</div>
            <div className="inputContainer">
              <input
                type={showPassword ? "text" : "password"}
                name="passwordInput"
                id="passwordInputsignIn"
                onChange={(e) => setPassword(e.target.value)}
              />
              {!showPassword && (
                <img
                  src={showPasswordIcon}
                  alt=""
                  className="EYEImage"
                  onClick={() => setshowPassword((prev) => !prev)}
                />
              )}
              {showPassword && (
                <img
                  src={hidePasswordIcon}
                  alt=""
                  className="EYEImage"
                  onClick={() => setshowPassword((prev) => !prev)}
                />
              )}
            </div>

            {IncorrectPassword && (
              <div className="errorTexts">Incorrect password</div>
            )}
          </label>
          <div id="submitDivSignin">
            <button
              id="signinSubmitButton"
              style={isLoading ? { backgroundColor: "#444444" } : {}}
            >
              {isLoading ? (
                <span className="generalLoadingIcon"></span>
              ) : (
                "Login"
              )}{" "}
            </button>
          </div>
        </form>

        <section id="signinExtras">
          <div id="refForgotPasssword">
            <Link to="/resetpassword" style={{ margin: 0 }} className="links2">
              Forgot password?
            </Link>
          </div>
          Don't have an account?
          <Link to="/signup" className="links2">
            Register
          </Link>
        </section>
      </div>
    </div>
  );
}

export default SignIn;
