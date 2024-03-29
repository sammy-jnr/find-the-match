import React, { useContext, useEffect } from "react";
import "./Settings.css";
import menuIcon from "../Assets/icons/menuIcon.svg";
import skipIcon from "../Assets/icons/skipIcon.svg";
import { GeneralContext } from "../context/MainContext";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Settings() {
  const { setmenuOpen, currectGameInfo, setCurrectGameInfo, setplayerNames } =
    useContext(GeneralContext);

  const location = useLocation();

  useEffect(() => {
    setmenuOpen(false);
  }, [location]);

  let navigate = useNavigate();

  const numbersMode = () => {
    setCurrectGameInfo((prev) => ({ ...prev, mode: "numbers" }));
  };
  const lettersMode = () => {
    setCurrectGameInfo((prev) => ({ ...prev, mode: "letters" }));
  };
  const imagesMode = () => {
    setCurrectGameInfo((prev) => ({ ...prev, mode: "images" }));
  };

  const numbersOfP1 = () => {
    setCurrectGameInfo((prev) => ({ ...prev, numberOfPlayers: 1 }));
  };
  const numbersOfP2 = () => {
    setCurrectGameInfo((prev) => ({ ...prev, numberOfPlayers: 2 }));
  };
  const numbersOfP3 = () => {
    setCurrectGameInfo((prev) => ({ ...prev, numberOfPlayers: 3 }));
  };
  const numbersOfP4 = () => {
    setCurrectGameInfo((prev) => ({ ...prev, numberOfPlayers: 4 }));
  };

  const gridIs4 = () => {
    setCurrectGameInfo((prev) => ({ ...prev, gridSize: "4by4" }));
  };
  const gridIs6 = () => {
    setCurrectGameInfo((prev) => ({ ...prev, gridSize: "6by6" }));
  };

  const Selected = {
    backgroundColor: "#00000084",
    color: "#fffdf0",
  };
  const NotSelected = {
    backgroundColor: "#fffdf0",
    color: "#000000d4",
  };

  return (
    <div id="SettingsContainer">
      <section id="settingsHeader">
        <h2>Settings</h2>
        <img
          src={menuIcon}
          alt=""
          className="hoverable"
          onClick={() => setmenuOpen(true)}
        />
      </section>
      <section id="skipSettingsSection">
        <div
          id="skipSettingsSectionDiv"
          className="hoverable"
          onClick={() => {
            navigate("/startgame");
          }}
        >
          <img src={skipIcon} alt="" id="skipIcon" />
          <p>SKIP</p>
        </div>
      </section>
      <section id="selectModeSection" className="settingsSections">
        <h3 id="selectModeTitle">Mode</h3>
        <div id="selectModeInner">
          <div
            className="selectModeItemsDiv hoverable"
            onClick={() => numbersMode()}
          >
            <div className="selectModeItemsImgDiv">
              <div className="selectModeItemsSelectOuter">
                {currectGameInfo.mode === "numbers" && (
                  <div className="selectModeItemsSelectInner"></div>
                )}
              </div>
            </div>
            <div className="selectModeItemsTextDiv">Numbers</div>
          </div>
          <div
            className="selectModeItemsDiv hoverable"
            onClick={() => lettersMode()}
          >
            <div className="selectModeItemsImgDiv">
              <div className="selectModeItemsSelectOuter">
                {currectGameInfo.mode === "letters" && (
                  <div className="selectModeItemsSelectInner"></div>
                )}
              </div>
            </div>
            <div className="selectModeItemsTextDiv">Letters</div>
          </div>
        </div>
      </section>
      <section id="numberOfPlayersSection" className="settingsSections">
        <h3 id="selectNumberOfPlayersTitle">Number of players</h3>
        <div id="numberOfPlayersInner">
          <div
            className="numberOfPlayersItems hoverable"
            onClick={() => {
              numbersOfP1();
            }}
          >
            <div className="numberOfPlayersImgDiv">
              <div className="numberOfPlayersSelectOuter">
                {currectGameInfo.numberOfPlayers === 1 && (
                  <div className="numberOfPlayersSelectInner"></div>
                )}
              </div>
            </div>
            <div className="numberOfPlayersTextDiv">Solo</div>
          </div>
          <div
            className="numberOfPlayersItems hoverable"
            onClick={() => {
              numbersOfP2();
            }}
          >
            <div className="numberOfPlayersImgDiv">
              <div className="numberOfPlayersSelectOuter">
                {currectGameInfo.numberOfPlayers === 2 && (
                  <div className="numberOfPlayersSelectInner"></div>
                )}
              </div>
            </div>
            <div className="numberOfPlayersTextDiv">2 Players</div>
          </div>
          <div
            className="numberOfPlayersItems hoverable"
            onClick={() => {
              numbersOfP3();
            }}
          >
            <div className="numberOfPlayersImgDiv">
              <div className="numberOfPlayersSelectOuter">
                {currectGameInfo.numberOfPlayers === 3 && (
                  <div className="numberOfPlayersSelectInner"></div>
                )}
              </div>
            </div>
            <div className="numberOfPlayersTextDiv">3 Players</div>
          </div>
          <div
            className="numberOfPlayersItems hoverable"
            onClick={() => {
              numbersOfP4();
            }}
          >
            <div className="numberOfPlayersImgDiv">
              <div className="numberOfPlayersSelectOuter">
                {currectGameInfo.numberOfPlayers === 4 && (
                  <div className="numberOfPlayersSelectInner"></div>
                )}
              </div>
            </div>
            <div className="numberOfPlayersTextDiv">4 players</div>
          </div>
        </div>
      </section>
      {currectGameInfo.numberOfPlayers > 1 && (
        <section className="playersInfoSection">
          <input
            onChange={(e) =>
              setplayerNames((prev) => ({ ...prev, player1: e.target.value }))
            }
            type="text"
            className="playersInfoSectionItems"
            placeholder="player1 - Enter name"
            maxLength={10}
          />
          <input
            onChange={(e) =>
              setplayerNames((prev) => ({ ...prev, player2: e.target.value }))
            }
            type="text"
            className="playersInfoSectionItems"
            placeholder="player2 - Enter name"
            maxLength={10}
          />
          {currectGameInfo.numberOfPlayers > 2 && (
            <input
              onChange={(e) =>
                setplayerNames((prev) => ({ ...prev, player3: e.target.value }))
              }
              type="text"
              className="playersInfoSectionItems"
              placeholder="player3 - Enter name"
              maxLength={10}
            />
          )}
          {currectGameInfo.numberOfPlayers > 3 && (
            <input
              onChange={(e) =>
                setplayerNames((prev) => ({ ...prev, player4: e.target.value }))
              }
              type="text"
              className="playersInfoSectionItems"
              placeholder="player4 - Enter name"
              maxLength={10}
            />
          )}
        </section>
      )}
      <section id="gridSizeSection" className="settingsSections">
        <h3 id="grigSizeTitle">Grid size</h3>
        <div id="gridSizeInner">
          {currectGameInfo.gridSize === "4by4" && (
            <div
              className="gridSizeItems hoverable"
              style={Selected}
              onClick={() => gridIs4()}
            >
              4 * 4
            </div>
          )}
          {currectGameInfo.gridSize !== "4by4" && (
            <div
              className="gridSizeItems hoverable"
              style={NotSelected}
              onClick={() => gridIs4()}
            >
              4 * 4
            </div>
          )}
          {currectGameInfo.gridSize === "6by6" && (
            <div
              className="gridSizeItems hoverable"
              style={Selected}
              onClick={() => gridIs6()}
            >
              6 * 6
            </div>
          )}
          {currectGameInfo.gridSize !== "6by6" && (
            <div
              className="gridSizeItems hoverable"
              style={NotSelected}
              onClick={() => gridIs6()}
            >
              6 * 6
            </div>
          )}
        </div>
      </section>
      <section id="startGameSection">
        <Link to={"/startgame"}>
          {" "}
          <button id="startGameButton" className="hoverable">
            START GAME
          </button>
        </Link>
      </section>
    </div>
  );
}

export default Settings;
