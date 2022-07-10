import React from 'react'
import TextWithIcon from "../../components/TextWithIcon";
import UserContainer from "./UserContainer";

const Sidebar = () => {
  return (
    <div className="side-bar">
          <TextWithIcon
            styleClass={"options"}
            icon={"fa fa-home"}
            text={"Home"}
          />
          <TextWithIcon
            styleClass={"options"}
            icon={"fa fa-tags"}
            text={"Labels"}
          />
          <TextWithIcon
            styleClass={"options"}
            icon={"fa fa-archive"}
            text={"Archive"}
          />
          <TextWithIcon
            styleClass={"options"}
            icon={"fa fa-trash"}
            text={"Trash"}
          />
          <UserContainer />
        </div>
  )
}

export default Sidebar