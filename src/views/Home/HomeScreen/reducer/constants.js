export const initialState = {
  selectedUser: null,
  socketActions: {
    join: "join",
    successJoin: "successJoin",
    checkUserStatus: "checkUserStatus",
    sendUserStatus: "sendUserStatus",
    sendMessage: "sendMessage",
    receiveMessage: "receiveMessage",
  },
  userDataSocket: null,
  userTest: {
    loading: false,
    error: null,
    data: null,
  },
};
