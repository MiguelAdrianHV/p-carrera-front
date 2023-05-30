import React, { useRouter, createContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { reducer, actions, initialState } from "./reducer";
import { Chat } from "components/Chat";
import { SidebarChat } from "components/SidebarChat";
import { Navbar } from "components/Navbar";
import { petition } from "api";
import "./styles.sass";
export const ChatContext = createContext();
export default function HomeScreen() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const navigate = useNavigate();

  function handleTestType() {
    petition({
      url: `/user/tests/${userInfo.id}/kuder`,
      method: "GET",
      constants: {
        REQUEST: actions.TEST_TYPE_REQUEST,
        SUCCESS: actions.TEST_TYPE_SUCCESS,
        FAILURE: actions.TEST_TYPE_FAILURE,
      },
      dispatch: dispatch,
    });
  }
  return (
    <div>
      <div className="home__screen">
        <Navbar />
        <div className="home__screen--test-buttons">
          <div className="home__screen--test-buttons--row">
            <div className="home__screen--test-buttons--column">
              <button className="home__screen--test-button" onClick={() => navigate("/kuder")}>
                Aptitudes
              </button>
              <button className="home__screen--test-button">
                Personalidad
              </button>
            </div>
            <div className="home__screen--test-buttons--column">
              <button className="home__screen--test-button">
                Capacidad
              </button>
              <button className="home__screen--test-button">
                Intereses
              </button>
            </div>
          </div>
        </div>
        <div className="home__screen--user-stats">
          <h1 className="home__screen--user-stats--title">Informacion del usuario</h1>
          <div className="home__screen--user-stats--user">
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              alt="user"
              className="home__screen--user-stats--user--image"
            />
            <h2 className="home__screen--user-stat">
              ID: {userInfo.identifier_number}
            </h2>
            <h2 className="home__screen--user-stat">
              Nombre: {userInfo.first_name} {userInfo.last_name}
            </h2>
            <h2 className="home__screen--user-stat">
              Email: {userInfo.email}
            </h2>
            <h2 className="home__screen--user-stat">
              Rol: {userInfo.role}
            </h2>
            <h2 className="home__screen--user-stat">
              Genero: {userInfo.gender}  
            </h2>
            <h2 className="home__screen--user-stat">
              ID de sitio: {userInfo.id}  
            </h2>
            <h2 className="home__screen--user-stat">
              Tipo de aptitud: {}  
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
