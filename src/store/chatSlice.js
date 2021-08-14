import IO from 'socket.io-client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createSlice} from '@reduxjs/toolkit';


const API_URI = '123'
export const socket = IO(`${API_URI}`, {
  forceNew: true,
});

socket.on('connection', () => console.log('Connection'));

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    room: [], // 활성화된 채팅방 리스트
    messages: [], // 전체 메세지
    activeUser: [], // 활성화 된 채팅방 유저 정보
    activeRoom: null, // 활성화된 채팅방 번호
    activeRoomMsgs: [], // 활성화된 채팅방 메세지
  },
  reducers: {
    allRoomList(state, action) {
      state.room = action.payload;
    },
    addMsg(state, action) {
      state.messages.push(action.payload);
      state.activeRoomMsgs.push(action.payload);
    },
    loadMsg(state, action) {
      state.messages.push(action.payload);
    },
    activeRoomNumber(state, action) {
      state.activeRoom = action.payload;
    },
    activeRoomMsg(state, action) {
      state.activeRoomMsgs = action.payload;
    },
    activeUserList(state, action) {
      state.activeUser = action.payload;
    },
    clearMsg(state, action) {
      state.activeRoomMsgs = [];
    },
  },
});
export const {
  allRoomList,
  addMsg,
  loadMsg,
  activeRoomNumber,
  activeRoomMsg,
  activeUserList,
  clearMsg,
} = chatSlice.actions;

export const loadMessages = () => async (dispatch, getState) => {
  // get user email or etc..
  const email = '123';
  socket.emit('sentMsgs', {myEmail}, data => {
    const myMsgs = data.map(data => {
      return {
        ...data,
        sender: myEmail == data.senderEmail,
      };
    });
    dispatch(loadMsg);
  });

  socket.emit('recievedMsgs', {myEmail}, data => {
    const myMsgs = data.map(data => {
      return {
        ...data,
        sender: myEmail == data.senderEmail,
      };
    });

    dispatch(loadMsg);
  });
};

export const sendMsg = txtMsg => async (dispatch, getState) => {
  const date = new Date();

  const {activeUser, activeRoom} = getState().chat;
  // 서버에 보낼 메세지 정보
  const composeMsg = {
    roomID: activeRoom,
    txtMsg,
    //senderEmail: 내 이메일,
    recieverEmail: activeUser,
    time: `${date.getHours()}:${date.getMinutes()}`,
    sender: true,
  };

  // 상태 변경
  dispatch(addMsg(composeMsg));

  //메세지 보냄
  socket.emit('sendTouser',composeMsg);
};

export const LoadRoomMsgs = () => async (dispatch, getState) => {
  const {activeRoom, messages} = getState().chat;

  new Promise(res => {
    res();
  }).then(() => {
    const RoomMsgs = messages.filter(({roomID}) => roomID == activeRoom) 
    dispatch(activeRoomMsg(RoomMsgs));
  });
};

export const clearActiveMsgs = () => async dispatch => {
  dispatch(clearMsg);
};

export default chatSlice;