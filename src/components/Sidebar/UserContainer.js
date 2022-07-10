import React from "react";

const UserContainer = () => {
  return (
    <div className="user-info">
      <div class="avatar sm">
        <img src="./avatar.jpg" alt="avatar-img" />
      </div>
      <div className="user-name">
        <h4>Haresh Kotkar</h4>
        <p className="text-blue cursor-pointer fn-sm">view profile</p>
      </div>
      <div className="cursor-pointer login-btn">
        <i class="fa fa-sign-out" aria-hidden="true"></i>
      </div>
    </div>
  );
};

export default UserContainer;
