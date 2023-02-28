import tokenAxios from './config';

const requestGetFriendsList = async (token: string) => {
  const { data } = await tokenAxios('/friends', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data.response.friends;
};

const requestGetSearchFriends = (value: string) => {
  return tokenAxios.get(`/friends/${value}`);
};

const requestPostFriendApplication = (receiverNo: number) => {
  return tokenAxios.post(`/friends/requests/${receiverNo}`, {
    receiverNo,
  });
};

const requestGetFriendsValidate = (friendUserNo: number) => {
  return tokenAxios.get(`/friends/validate/${friendUserNo}`);
};

const requestGetNotFriendList = (nickname: string) => {
  return tokenAxios.get(`/friends/not-friends/${nickname}`);
};

export {
  requestGetFriendsList,
  requestGetSearchFriends,
  requestPostFriendApplication,
  requestGetFriendsValidate,
  requestGetNotFriendList,
};
