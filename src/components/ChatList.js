import React from "react";
import UserInfo from "./UserInfo";

const ChatList = ({ setUser }) => {
  const users = JSON.parse(localStorage.getItem("users")) || [];
  const userData = users.find((item) => item.user_id === 100001);
  const listData = users.filter((item) => item.user_id !== 100001);

  return (
    <div className="list">
      <div className="header">
        <UserInfo data={userData} />
      </div>
      <div className="users">
        {listData.length > 0 &&
          listData.map((item) => (
            <div key={item.user_id} onClick={() => setUser(item)}>
              <UserInfo data={item} />
            </div>
          ))}
      </div>
      <div className="add-button">
        <button onClick={() => setUser("newUser")}>+ User</button>
      </div>
    </div>
  );
};

export default ChatList;
