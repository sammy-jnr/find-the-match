import React, { useContext, useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Sign.css";
import { AuthContext } from "../context/AuthenticationContext";
import { GeneralContext } from "../context/MainContext";
import menuIconBlack from "../Assets/icons/menuIconBlack.svg";
import showPasswordIcon from "./Icons/showPassword.svg";
import hidePasswordIcon from "./Icons/hidePassword.svg";

function SignUp() {
  const { CreateNewUser, setDisplayName } = useContext(AuthContext);
  const navigate = useNavigate();

  const location = useLocation();
  const { setmenuOpen } = useContext(GeneralContext);

  useEffect(() => {
    setmenuOpen(false);
  }, [location]);

  const [isLoading, setisLoading] = useState(false);

  let [name, setname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [confirmPassword, setConfirmPassword] = useState("");

  let [isPasswordSame, setisPasswordSame] = useState(true);
  let [isPasswordStrong, setisPasswordStrong] = useState(true);
  let [isEmailCorrect, setisEmailCorrect] = useState(true);
  let [isEmailInUse, setisEmailInUse] = useState(false);
  let [isNameCorrect, setisNameCorrect] = useState(true);

  const submitInfo = async (e) => {
    e.preventDefault();
    if (name.length < 3) {
      setisNameCorrect(false);
      return;
    }
    if (!email.includes("@")) {
      setisEmailCorrect(false);
      return;
    }
    if (password !== confirmPassword) {
      setisPasswordSame(false);
      return;
    }
    if (password.length < 6 || password === 123456) {
      setisPasswordStrong(false);
      return;
    }
    setisLoading(true);
    try {
      await CreateNewUser(email, password).then(() => {
        navigate("/profilepage");
        setisLoading(false);
      });
    } catch (error) {
      if (error.message.substring(17) === "auth/email-already-in-use).") {
        setisEmailInUse(true);
        setisLoading(false);
      }
    }
  };

  let [showPassword, setshowPassword] = useState(false);

  return (
    <div id="signupContainer">
      <div className="signContainerInner">
        <section id="signupMenu">
          <img
            src={menuIconBlack}
            alt=""
            className="hoverable"
            id="signupMenuIcon"
            onClick={() => setmenuOpen(true)}
          />
        </section>
        <section id="signupText">Create your account!</section>
        <form action="submit" id="signupForm" onSubmit={(e) => submitInfo(e)}>
          <label htmlFor="nameInput" className="formItems">
            <div className="signupMiniText">Name</div>
            <input
              type="name"
              name="nameInput"
              id="nameInput"
              onChange={(e) => {
                setDisplayName(e.target.value);
                setname(e.target.value);
                setisNameCorrect(true);
              }}
            />
            {!isNameCorrect && (
              <div className="errorTexts">
                Name needs to be at least 3 letters
              </div>
            )}
          </label>
          <label htmlFor="emailInput" className="formItems">
            <div className="signupMiniText">Email</div>
            <input
              type="email"
              name="emailInput"
              id="emailInput"
              onChange={(e) => {
                setEmail(e.target.value);
                setisEmailCorrect(true);
              }}
            />
            {!isEmailCorrect && (
              <div className="errorTexts">
                Enter a valid email. must contain "@"
              </div>
            )}
            {isEmailInUse && (
              <div className="errorTexts">Email is already in use</div>
            )}
          </label>
          <label htmlFor="passwordInput" className="formItems">
            <div className="signupMiniText">Password</div>
            <div className="inputContainer">
              <input
                type={showPassword ? "text" : "password"}
                name="passwordInput"
                id="passwordInput"
                onChange={(e) => {
                  setPassword(e.target.value);
                  setisPasswordSame(true);
                  setisPasswordStrong(true);
                }}
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
            {!isPasswordSame && (
              <div className="errorTexts" id="passwordError">
                passwords do not match
              </div>
            )}
            {!isPasswordStrong && (
              <div className="errorTexts">password is too short</div>
            )}
          </label>
          <label htmlFor="ConfirmPasswordInput" className="formItems">
            <div className="signupMiniText">Confirm Password</div>
            <div className="inputContainer">
              <input
                type={showPassword ? "text" : "password"}
                name="confirmPasswordInput"
                id="confirmPasswordInput"
                onChange={(e) => {
                  setConfirmPassword(e.target.value);
                  setisPasswordSame(true);
                  setisPasswordStrong(true);
                }}
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
            {!isPasswordSame && (
              <div className="errorTexts">passwords do not match</div>
            )}
          </label>
          <div id="submitDiv">
            <button
              id="signupSubmitButton"
              style={isLoading ? { backgroundColor: "#444444" } : {}}
            >
              {isLoading ? (
                <span className="generalLoadingIcon"></span>
              ) : (
                "Register"
              )}
            </button>
          </div>
        </form>
        <section id="signupExtras">
          Already have an account?
          <Link to="/signin" className="links2">
            Login
          </Link>
        </section>
      </div>
    </div>
  );
}

export default SignUp;
