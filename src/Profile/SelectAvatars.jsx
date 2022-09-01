import React from 'react'
import "./Profile.css"
import avatar1 from "../Assets/Avatars/avatar1.jpg"
import avatar2 from "../Assets/Avatars/avatar2.jpg"
import avatar3 from "../Assets/Avatars/avatar3.jpg"
import avatar4 from "../Assets/Avatars/avatar4.jpg"
import avatar5 from "../Assets/Avatars/avatar5.jpg"
import avatar6 from "../Assets/Avatars/avatar6.jpg"
import avatar7 from "../Assets/Avatars/avatar7.jpg"
import avatar8 from "../Assets/Avatars/avatar8.jpg"
import avatar9 from "../Assets/Avatars/avatar9.jpg"
import avatar10 from "../Assets/Avatars/avatar10.jpg"
import avatar11 from "../Assets/Avatars/avatar11.jpg"
import avatar12 from "../Assets/Avatars/avatar12.jpg"
import avatar13 from "../Assets/Avatars/avatar13.jpg"
import avatar14 from "../Assets/Avatars/avatar14.jpg"
import avatar15 from "../Assets/Avatars/avatar15.jpg"
import avatar16 from "../Assets/Avatars/avatar16.jpg"
import avatar17 from "../Assets/Avatars/avatar17.jpg"
import avatar18 from "../Assets/Avatars/avatar18.jpg"
import { useState, useContext } from 'react'
import { AuthContext } from "../context/AuthenticationContext";
import { useNavigate} from "react-router-dom";



function SelectAvatars() {
    const navigate = useNavigate();

    const { updatingUserAvatar } = useContext(AuthContext);

    let [userAvatar, setuserAvatar] = useState("avatar4");

    let [isAvatar1Selected, setisAvatar1Selected] = useState(false)
    let [isAvatar2Selected, setisAvatar2Selected] = useState(false)
    let [isAvatar3Selected, setisAvatar3Selected] = useState(false)
    let [isAvatar4Selected, setisAvatar4Selected] = useState(true)
    let [isAvatar5Selected, setisAvatar5Selected] = useState(false)
    let [isAvatar6Selected, setisAvatar6Selected] = useState(false)
    let [isAvatar7Selected, setisAvatar7Selected] = useState(false)
    let [isAvatar8Selected, setisAvatar8Selected] = useState(false)
    let [isAvatar9Selected, setisAvatar9Selected] = useState(false)
    let [isAvatar10Selected, setisAvatar10Selected] = useState(false)
    let [isAvatar11Selected, setisAvatar11Selected] = useState(false)
    let [isAvatar12Selected, setisAvatar12Selected] = useState(false)
    let [isAvatar13Selected, setisAvatar13Selected] = useState(false)
    let [isAvatar14Selected, setisAvatar14Selected] = useState(false)
    let [isAvatar15Selected, setisAvatar15Selected] = useState(false)
    let [isAvatar16Selected, setisAvatar16Selected] = useState(false)
    let [isAvatar17Selected, setisAvatar17Selected] = useState(false)
    let [isAvatar18Selected, setisAvatar18Selected] = useState(false)

    function unSelectAllAvatars(){
        setisAvatar1Selected(false)
        setisAvatar2Selected(false)
        setisAvatar3Selected(false)
        setisAvatar4Selected(false)
        setisAvatar5Selected(false)
        setisAvatar6Selected(false)
        setisAvatar7Selected(false)
        setisAvatar8Selected(false)
        setisAvatar9Selected(false)
        setisAvatar10Selected(false)
        setisAvatar11Selected(false)
        setisAvatar12Selected(false)
        setisAvatar13Selected(false)
        setisAvatar14Selected(false)
        setisAvatar15Selected(false)
        setisAvatar16Selected(false)
        setisAvatar17Selected(false)
        setisAvatar18Selected(false)
    }
    
  return (
    <div id='avatarsContainer'>
        <div id='avatarsContainerHeaderText'>AVATARS</div>
        <div id="displayAvatars">
            <div className='avatarsDiv' 
            style={{backgroundColor: isAvatar1Selected ? "green":"transparent"}}
                onClick={()=>{
                    unSelectAllAvatars();
                    setisAvatar1Selected(true)
                    setuserAvatar("avatar1")
                }}
            >
            <img src={avatar1} alt="" className='avatars'/>
            </div>
            <div className='avatarsDiv' style={{backgroundColor: isAvatar2Selected ? "green":"transparent"}}
            onClick={()=>{
                unSelectAllAvatars();
                setisAvatar2Selected(true)
                setuserAvatar("avatar2")
            }}>
                <img src={avatar2} alt="" className='avatars'/>
            </div>
            <div className='avatarsDiv'
            style={{backgroundColor: isAvatar3Selected ? "green":"transparent"}}
            onClick={()=>{
                unSelectAllAvatars();
                setisAvatar3Selected(true)
                setuserAvatar("avatar3")
            }}>
                <img src={avatar3} alt="" className='avatars'/>
            </div>
            <div className='avatarsDiv'
            style={{backgroundColor: isAvatar4Selected ? "green":"transparent"}}
            onClick={()=>{
                unSelectAllAvatars();
                setisAvatar4Selected(true)
                setuserAvatar("avatar4")
            }}>
                <img src={avatar4} alt="" className='avatars'/>
            </div>
            <div className='avatarsDiv'
            style={{backgroundColor: isAvatar5Selected ? "green":"transparent"}}
            onClick={()=>{
                unSelectAllAvatars();
                setisAvatar5Selected(true)
                setuserAvatar("avatar5")
            }}>
                <img src={avatar5} alt="" className='avatars'/>
            </div>
            <div className='avatarsDiv'
            style={{backgroundColor: isAvatar6Selected ? "green":"transparent"}}
            onClick={()=>{
                unSelectAllAvatars();
                setisAvatar6Selected(true)
                setuserAvatar("avatar6")
            }}>
                <img src={avatar6} alt="" className='avatars'/>
            </div>
            <div className='avatarsDiv'
            style={{backgroundColor: isAvatar7Selected ? "green":"transparent"}}
            onClick={()=>{
                unSelectAllAvatars();
                setisAvatar7Selected(true)
                setuserAvatar("avatar7")
            }}>
                <img src={avatar7} alt="" className='avatars'/>
            </div>
            <div className='avatarsDiv'
            style={{backgroundColor: isAvatar8Selected ? "green":"transparent"}}
            onClick={()=>{
                unSelectAllAvatars();
                setisAvatar8Selected(true)
                setuserAvatar("avatar8")
            }}>
                <img src={avatar8} alt="" className='avatars'/>
            </div>
            <div className='avatarsDiv'
            style={{backgroundColor: isAvatar9Selected ? "green":"transparent"}}
            onClick={()=>{
                unSelectAllAvatars();
                setisAvatar9Selected(true)
                setuserAvatar("avatar9")
            }}>
                <img src={avatar9} alt="" className='avatars'/>
            </div>
            <div className='avatarsDiv'
            style={{backgroundColor: isAvatar10Selected ? "green":"transparent"}}
            onClick={()=>{
                unSelectAllAvatars();
                setisAvatar10Selected(true)
                setuserAvatar("avatar10")
            }}>
                <img src={avatar10} alt="" className='avatars'/>
            </div>
            <div className='avatarsDiv'
            style={{backgroundColor: isAvatar11Selected ? "green":"transparent"}}
            onClick={()=>{
                unSelectAllAvatars();
                setisAvatar11Selected(true)
                setuserAvatar("avatar11")
            }}>
                <img src={avatar11} alt="" className='avatars'/>
            </div>
            <div className='avatarsDiv'
            style={{backgroundColor: isAvatar12Selected ? "green":"transparent"}}
            onClick={()=>{
                unSelectAllAvatars();
                setisAvatar12Selected(true)
                setuserAvatar("avatar12")
            }}>
                <img src={avatar12} alt="" className='avatars'/>
            </div>
            <div className='avatarsDiv'
            style={{backgroundColor: isAvatar13Selected ? "green":"transparent"}}
            onClick={()=>{
                unSelectAllAvatars();
                setisAvatar13Selected(true)
                setuserAvatar("avatar13")
            }}>
                <img src={avatar13} alt="" className='avatars'/>
            </div>
            <div className='avatarsDiv'
            style={{backgroundColor: isAvatar14Selected ? "green":"transparent"}}
            onClick={()=>{
                unSelectAllAvatars();
                setisAvatar14Selected(true)
                setuserAvatar("avatar14")
            }}>
                <img src={avatar14} alt="" className='avatars'/>
            </div>
            <div className='avatarsDiv'
            style={{backgroundColor: isAvatar15Selected ? "green":"transparent"}}
            onClick={()=>{
                unSelectAllAvatars();
                setisAvatar15Selected(true)
                setuserAvatar("avatar15")
            }}>
                <img src={avatar15} alt="" className='avatars'/>
            </div>
            <div className='avatarsDiv'
            style={{backgroundColor: isAvatar16Selected ? "green":"transparent"}}
            onClick={()=>{
                unSelectAllAvatars();
                setisAvatar16Selected(true)
                setuserAvatar("avatar16")
            }}>
                <img src={avatar16} alt="" className='avatars'/>
            </div>
            <div className='avatarsDiv'
            style={{backgroundColor: isAvatar17Selected ? "green":"transparent"}}
            onClick={()=>{
                unSelectAllAvatars();
                setisAvatar17Selected(true)
                setuserAvatar("avatar17")
            }}>
                <img src={avatar17} alt="" className='avatars'/>
            </div>
            <div className='avatarsDiv'
            style={{backgroundColor: isAvatar18Selected ? "green":"transparent"}}
            onClick={()=>{
                unSelectAllAvatars();
                setisAvatar18Selected(true)
                setuserAvatar("avatar18")
            }}>
                <img src={avatar18} alt="" className='avatars'/>
            </div>
        </div>
        <div id='avatarsContainerButtonSection'>
            <button className="avatarsContainerButtons"
                onClick={()=>{
                    navigate("/profilepage")
                }}>Cancel</button>
            <button className="avatarsContainerButtons"
                onClick={()=>{
                    updatingUserAvatar(userAvatar);
                    navigate("/profilepage")
                }}
            >Save</button>
        </div>
    </div>
  )
}

export default SelectAvatars