import React, { useReducer, useEffect, useContext } from "react";
import { reducer, actions, initialState } from "./reducer";
import { Message } from "components/Message";
import "./styles.sass";
import { Button } from "components/Buttons";
import { TextComponent } from "components/Texts";
import { Form } from "components/Forms";
import Icon from "components/icon";
import { petition } from "api";
import { useQuery } from "hooks";
import { Loader } from "components/Loader";
import { ChatContext } from "views/Home/HomeScreen";
export const Chat = ({ user }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const query = useQuery();
  const { socket, socketActions } = useContext(ChatContext);
  const controller = new AbortController();
  const getConversation = (id) => {
    petition({
      url: `/user/conversation/validate/history/${id}/`,
      method: "GET",
      constants: {
        REQUEST: actions.VALIDATE_CONVERSATION,
        SUCCESS: actions.VALIDATE_CONVERSATION_SUCCESS,
        FAILURE: actions.VALIDATE_CONVERSATION_FAIL,
      },
      dispatch,
      token: true,
      controller,
    });
  };
  const conversation = query.get("conversation");
  // useEffect(() => {
  //   if (conversation) {
  //     getConversation(conversation);
  //   }
  // }, [conversation]);
  useEffect(() => {
    if (user.id) {
      getConversation(user.id);
      socket.emit(socketActions.checkUserStatus, user.id);
    }
    dispatch({
      type: actions.UPDATE_MESSAGE,
      payload: "",
    });
    return () => {
      socket.off(socketActions.checkUserStatus);
    };
  }, [user]);
  useEffect(() => {
    if (state.validateConversation.loading) {
      console.log("cancelling request")
      controller.abort();
    }
  }, [user]);
  useEffect(() => {
    socket.on(socketActions.sendUserStatus, (data) => {
      dispatch({
        type: actions.SET_USER_SELECTED_REAL_TIME_INFO,
        payload: data,
      });
    });
    socket.on(socketActions.receiveMessage, (data) => {
      dispatch({
        type: actions.ADD_MESSAGE_RECEIVED,
        payload: data,
      });
      let chat__history = document.getElementById("chat__history");
      // scroll to bottom
      chat__history.scrollTop = chat__history.scrollHeight;
    });
    return () => {
      socket.off(socketActions.sendUserStatus);
      socket.off(socketActions.receiveMessage);
    };
  }, [socketActions.sendUserStatus, socket]);
  const handleSendMessage = () => {
    petition({
      url: `/user/conversation/new/${user.id}/`,
      method: "POST",
      body: {
        message: state.message,
      },
      constants: {
        REQUEST: actions.START_CONVERSATION,
        SUCCESS: actions.START_CONVERSATION_SUCCESS,
        FAILURE: actions.START_CONVERSATION_FAIL,
      },
      dispatch,
      token: true,
    });
    if (state.userSelectedStatus.status === "online") {
      socket.emit(socketActions.sendMessage, {
        receiver: {
          socketId: state.userSelectedStatus.socketId,
        },
        message: state.message,
        sender: {
          id: userInfo.id,
        },
        user: {
          id: userInfo.id,
          first_name: userInfo.first_name,
          last_name: userInfo.last_name,
          role: userInfo.role,
        },
      });
    }
    let chat__history = document.getElementById("chat__history");
    chat__history.scrollTop = chat__history.scrollHeight;
  };
  return (
    <div className="chat__component">
      <div className="chat__header">
        <TextComponent
          type="h4"
          text={{
            en: user.first_name + " " + user.last_name,
            es: user.first_name + " " + user.last_name,
          }}
        />
        {state.userSelectedStatus && (
          <TextComponent
            type="p"
            text={state.userSelectedStatus.status}
            disableLocales={true}
          />
        )}
      </div>
      {state.validateConversation.loading ? (
        <div className="chat__loading">
          <Loader />
        </div>
      ) : (
        <div className="chat__history" id="chat__history">
          {state.chatMessages.map((message, index) => (
            <Message
              message={message.message}
              created_at={message.created_at}
              myMessage={message.user.id === userInfo.id}
              key={index}
            />
          ))}
        </div>
      )}

      <div className="chat__input">
        <Form>
          <input
            placeholder="Enviar mensaje"
            value={state.message}
            onChange={(e) =>
              dispatch({
                type: actions.UPDATE_MESSAGE,
                payload: e.target.value,
              })
            }
          />
          <div className="chat__input__button">
            <Icon
              nameIcon={"RiSendPlaneFill"}
              onClick={() => {
                if (state.message !== "") {
                  if (
                    !state.validateConversation.loading &&
                    !state.startConversation.loading
                  ) {
                    handleSendMessage();
                  }
                }
              }}
            />
          </div>
        </Form>
      </div>
    </div>
  );
};
