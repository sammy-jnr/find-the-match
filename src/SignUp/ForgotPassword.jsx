import React, { useContext, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { GeneralContext } from "../context/MainContext";
import arrowBack from "../Assets/icons/arrowBack.svg";
import "./Sign.css";

function ForgotPassword() {
  const location = useLocation();

  const navigate = useNavigate();

  const { setmenuOpen } = useContext(GeneralContext);
  useEffect(() => {
    setmenuOpen(false);
  }, [location]);

  return (
    <div id="forgotPasswordContainer">
      <img
        src={arrowBack}
        alt=""
        className="resetPasswordBack hoverable"
        onClick={() => navigate(-1)}
      />
      <div className="signContainerInner">
        <div id="signinText">Reset Password</div>
        <div id="forgotPasswordDiv">
          <label htmlFor="emailInput">
            <div id="forgotPasswordMiniText">Email</div>
            <input
              type="email"
              name="emailInput"
              id="emailInputForgotPassword"
            />
          </label>
        </div>

        <div id="submitDivForgotPassword">
          <button id="ForgotPasswordSubmitButton">Submit</button>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
