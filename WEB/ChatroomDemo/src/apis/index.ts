import axios from "axios";

export const getToken = (userId: string, nickname: string, avatar: string) => {
  return axios.post(
    "https://a1.easemob.com/internal/appserver/liverooms/user/login",
    {
      username: userId,
      icon_key: avatar,
      nickname,
    }
  );
};

export const createChatroom = (chatroomName: string, ownerId: string) => {
  const token = sessionStorage.getItem("chatroom-token");
  return axios.post(
    "https://a1.easemob.com/internal/appserver/liverooms ",
    {
      name: chatroomName,
      owner: ownerId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const getChatroomList = () => {
  const token = sessionStorage.getItem("chatroom-token");
  return axios.get("https://a1.easemob.com/internal/appserver/liverooms", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const deleteChatroom = (roomId: string) => {
  const token = sessionStorage.getItem("chatroom-token");
  return axios.delete(
    `https://a1.easemob.com/internal/appserver/liverooms/${roomId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
