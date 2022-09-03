import React from "react";
import "./Profile.css";
import avatar1 from "../Assets/Avatars/avatar1.jpg";
import avatar2 from "../Assets/Avatars/avatar2.jpg";
import avatar3 from "../Assets/Avatars/avatar3.jpg";
import avatar4 from "../Assets/Avatars/avatar4.jpg";
import avatar5 from "../Assets/Avatars/avatar5.jpg";
import avatar6 from "../Assets/Avatars/avatar6.jpg";
import avatar7 from "../Assets/Avatars/avatar7.jpg";
import avatar8 from "../Assets/Avatars/avatar8.jpg";
import avatar9 from "../Assets/Avatars/avatar9.jpg";
import avatar10 from "../Assets/Avatars/avatar10.jpg";
import avatar11 from "../Assets/Avatars/avatar11.jpg";
import avatar12 from "../Assets/Avatars/avatar12.jpg";
import avatar13 from "../Assets/Avatars/avatar13.jpg";
import avatar14 from "../Assets/Avatars/avatar14.jpg";
import avatar15 from "../Assets/Avatars/avatar15.jpg";
import avatar16 from "../Assets/Avatars/avatar16.jpg";
import avatar17 from "../Assets/Avatars/avatar17.jpg";
import avatar18 from "../Assets/Avatars/avatar18.jpg";
import { useState, useContext } from "react";
import { AuthContext } from "../context/AuthenticationContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../Firebase/FirebaseHosting";
import { useEffect } from "react";

function SelectAvatars() {
  const navigate = useNavigate();

  const { updatingUserAvatar } = useContext(AuthContext);

  let [userAvatar, setuserAvatar] = useState("avatar4");

  let [avatarsState, setavatarsState] = useState({
    avatar1State: false,
    avatar2State: false,
    avatar3State: false,
    avatar4State: false,
    avatar5State: false,
    avatar6State: false,
    avatar7State: false,
    avatar8State: false,
    avatar9State: false,
    avatar10State: false,
    avatar11State: false,
    avatar12State: false,
    avatar13State: false,
    avatar14State: false,
    avatar15State: false,
    avatar16State: false,
    avatar17State: false,
    avatar18State: false,
  });

  function unSelectAllAvatars() {
    setavatarsState(
      (avatarsState.avatar1State = false),
      (avatarsState.avatar2State = false),
      (avatarsState.avatar3State = false),
      (avatarsState.avatar4State = false),
      (avatarsState.avatar5State = false),
      (avatarsState.avatar6State = false),
      (avatarsState.avatar7State = false),
      (avatarsState.avatar8State = false),
      (avatarsState.avatar9State = false),
      (avatarsState.avatar10State = false),
      (avatarsState.avatar11State = false),
      (avatarsState.avatar12State = false),
      (avatarsState.avatar13State = false),
      (avatarsState.avatar14State = false),
      (avatarsState.avatar15State = false),
      (avatarsState.avatar16State = false),
      (avatarsState.avatar17State = false),
      (avatarsState.avatar18State = false)
    );
  }

  let usedAvatar = auth.currentUser.photoURL;
  useEffect(() => {
    if (!auth.currentUser) return;
    setavatarsState((prev) => ({ ...prev, [`${usedAvatar}State`]: true }));
  }, []);

  return (
    <div id="avatarsContainer">
      <div id="avatarsContainerHeaderText">AVATARS</div>
      <div id="displayAvatars">
        <div
          className="avatarsDiv"
          style={{
            backgroundColor: avatarsState.avatar1State
              ? "green"
              : "transparent",
          }}
          onClick={() => {
            unSelectAllAvatars();
            setavatarsState({ avatar1State: true });
            setuserAvatar("avatar1");
          }}
        >
          <img src={avatar1} alt="" className="avatars" />
        </div>
        <div
          className="avatarsDiv"
          style={{
            backgroundColor: avatarsState.avatar2State
              ? "green"
              : "transparent",
          }}
          onClick={() => {
            unSelectAllAvatars();
            setavatarsState({ avatar2State: true });
            setuserAvatar("avatar2");
          }}
        >
          <img src={avatar2} alt="" className="avatars" />
        </div>
        <div
          className="avatarsDiv"
          style={{
            backgroundColor: avatarsState.avatar3State
              ? "green"
              : "transparent",
          }}
          onClick={() => {
            unSelectAllAvatars();
            setavatarsState({ avatar3State: true });
            setuserAvatar("avatar3");
          }}
        >
          <img src={avatar3} alt="" className="avatars" />
        </div>
        <div
          className="avatarsDiv"
          style={{
            backgroundColor: avatarsState.avatar4State
              ? "green"
              : "transparent",
          }}
          onClick={() => {
            unSelectAllAvatars();
            setavatarsState({ avatar4State: true });
            setuserAvatar("avatar4");
          }}
        >
          <img src={avatar4} alt="" className="avatars" />
        </div>
        <div
          className="avatarsDiv"
          style={{
            backgroundColor: avatarsState.avatar5State
              ? "green"
              : "transparent",
          }}
          onClick={() => {
            unSelectAllAvatars();
            setavatarsState({ avatar5State: true });
            setuserAvatar("avatar5");
          }}
        >
          <img src={avatar5} alt="" className="avatars" />
        </div>
        <div
          className="avatarsDiv"
          style={{
            backgroundColor: avatarsState.avatar6State
              ? "green"
              : "transparent",
          }}
          onClick={() => {
            unSelectAllAvatars();
            setavatarsState({ avatar6State: true });
            setuserAvatar("avatar6");
          }}
        >
          <img src={avatar6} alt="" className="avatars" />
        </div>
        <div
          className="avatarsDiv"
          style={{
            backgroundColor: avatarsState.avatar7State
              ? "green"
              : "transparent",
          }}
          onClick={() => {
            unSelectAllAvatars();
            setavatarsState({ avatar7State: true });
            setuserAvatar("avatar7");
          }}
        >
          <img src={avatar7} alt="" className="avatars" />
        </div>
        <div
          className="avatarsDiv"
          style={{
            backgroundColor: avatarsState.avatar8State
              ? "green"
              : "transparent",
          }}
          onClick={() => {
            unSelectAllAvatars();
            setavatarsState({ avatar8State: true });
            setuserAvatar("avatar8");
          }}
        >
          <img src={avatar8} alt="" className="avatars" />
        </div>
        <div
          className="avatarsDiv"
          style={{
            backgroundColor: avatarsState.avatar9State
              ? "green"
              : "transparent",
          }}
          onClick={() => {
            unSelectAllAvatars();
            setavatarsState({ avatar9State: true });
            setuserAvatar("avatar9");
          }}
        >
          <img src={avatar9} alt="" className="avatars" />
        </div>
        <div
          className="avatarsDiv"
          style={{
            backgroundColor: avatarsState.avatar10State
              ? "green"
              : "transparent",
          }}
          onClick={() => {
            unSelectAllAvatars();
            setavatarsState({ avatar10State: true });
            setuserAvatar("avatar10");
          }}
        >
          <img src={avatar10} alt="" className="avatars" />
        </div>
        <div
          className="avatarsDiv"
          style={{
            backgroundColor: avatarsState.avatar11State
              ? "green"
              : "transparent",
          }}
          onClick={() => {
            unSelectAllAvatars();
            setavatarsState({ avatar11State: true });
            setuserAvatar("avatar11");
          }}
        >
          <img src={avatar11} alt="" className="avatars" />
        </div>
        <div
          className="avatarsDiv"
          style={{
            backgroundColor: avatarsState.avatar12State
              ? "green"
              : "transparent",
          }}
          onClick={() => {
            unSelectAllAvatars();
            setavatarsState({ avatar12State: true });
            setuserAvatar("avatar12");
          }}
        >
          <img src={avatar12} alt="" className="avatars" />
        </div>
        <div
          className="avatarsDiv"
          style={{
            backgroundColor: avatarsState.avatar13State
              ? "green"
              : "transparent",
          }}
          onClick={() => {
            unSelectAllAvatars();
            setavatarsState({ avatar13State: true });
            setuserAvatar("avatar13");
          }}
        >
          <img src={avatar13} alt="" className="avatars" />
        </div>
        <div
          className="avatarsDiv"
          style={{
            backgroundColor: avatarsState.avatar14State
              ? "green"
              : "transparent",
          }}
          onClick={() => {
            unSelectAllAvatars();
            setavatarsState({ avatar14State: true });
            setuserAvatar("avatar14");
          }}
        >
          <img src={avatar14} alt="" className="avatars" />
        </div>
        <div
          className="avatarsDiv"
          style={{
            backgroundColor: avatarsState.avatar15State
              ? "green"
              : "transparent",
          }}
          onClick={() => {
            unSelectAllAvatars();
            setavatarsState({ avatar15State: true });
            setuserAvatar("avatar15");
          }}
        >
          <img src={avatar15} alt="" className="avatars" />
        </div>
        <div
          className="avatarsDiv"
          style={{
            backgroundColor: avatarsState.avatar16State
              ? "green"
              : "transparent",
          }}
          onClick={() => {
            unSelectAllAvatars();
            setavatarsState({ avatar16State: true });
            setuserAvatar("avatar16");
          }}
        >
          <img src={avatar16} alt="" className="avatars" />
        </div>
        <div
          className="avatarsDiv"
          style={{
            backgroundColor: avatarsState.avatar17State
              ? "green"
              : "transparent",
          }}
          onClick={() => {
            unSelectAllAvatars();
            setavatarsState({ avatar17State: true });
            setuserAvatar("avatar17");
          }}
        >
          <img src={avatar17} alt="" className="avatars" />
        </div>
        <div
          className="avatarsDiv"
          style={{
            backgroundColor: avatarsState.avatar18State
              ? "green"
              : "transparent",
          }}
          onClick={() => {
            unSelectAllAvatars();
            setavatarsState({ avatar18State: true });
            setuserAvatar("avatar18");
          }}
        >
          <img src={avatar18} alt="" className="avatars" />
        </div>
      </div>
      <div id="avatarsContainerButtonSection">
        <button
          className="avatarsContainerButtons"
          onClick={() => {
            navigate("/profilepage");
          }}
        >
          Cancel
        </button>
        <button
          className="avatarsContainerButtons"
          onClick={() => {
            updatingUserAvatar(userAvatar);
            navigate("/profilepage");
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default SelectAvatars;
