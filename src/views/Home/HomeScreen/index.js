import React, { useRouter, createContext, useEffect } from "react";
import { reducer, actions, initialState } from "./reducer";
import { Chat } from "components/Chat";
import { SidebarChat } from "components/SidebarChat";
import io from "socket.io-client";
import "./styles.sass";
const socket = io.connect("http://localhost:5051");
export const ChatContext = createContext();
export default function HomeScreen() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  useEffect(() => {
    socket.on("connect", () => {
      // get data from local storage
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (userInfo) {
        socket.emit(state.socketActions.join, {
          id: userInfo.id,
          first_name: userInfo.first_name,
          last_name: userInfo.last_name,
          email: userInfo.email,
          identifier_number: userInfo.identifier_number,
          gender: userInfo.gender,
          role: userInfo.role,
        });
      }
    });
  }, [state.socketActions.join]);
  useEffect(() => {
    socket.on(state.socketActions.successJoin, (data) => {
      dispatch({
        type: actions.SET_USER_DATA_SOCKET,
        payload: data,
      });
    });
    return () => {
      socket.off(state.socketActions.successJoin);
    };
  }, []);
  return (
    <ChatContext.Provider
      value={{
        selectedUser: state.selectedUser,
        setSelectedUser: (user) =>
          dispatch({ type: actions.SET_SELECTED_USER, payload: user }),
        userDataSocket: state.userDataSocket,
        userInfo: JSON.parse(localStorage.getItem("userInfo")),
        socket,
        socketActions: state.socketActions,
      }}
    >
      <div className="home__screen">
        <SidebarChat />
        <div className="chat__content">
          {state.selectedUser && <Chat user={state.selectedUser} />}
        </div>
      </div>
    </ChatContext.Provider>
  );
}
