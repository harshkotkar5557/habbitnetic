import React from "react";
import Container from "../../components/Container";
import SqaureCard from "../../components/SqaureCard";
import TextWithIcon from "../../components/TextWithIcon";
import UserContainer from "./UserContainer";

const Home1 = () => {
  return (
    <Container styleClass={"main-container"}>
      <div className="nav-bar">
        <h1>Habbitnetic</h1>
      </div>
      <div className="d-flex h-90v p-t-2">
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
        <section className="content-section">
          <div className="d-flex justify-space-bw">
            <h2>Welcome, Haresh👋</h2>
            <h4 className="text-blue cursor-pointer">
              Today <i class="fa fa-chevron-down" aria-hidden="true"></i>
            </h4>
          </div>
          <div className="task-type-container">
            <SqaureCard />
            <SqaureCard />
            <SqaureCard />
            <SqaureCard />
            <SqaureCard />
          </div>
          <div className="d-flex justify-space-bw">
            <h2>My Habits 🎯</h2>
            <h4 className="text-blue cursor-pointer">
              <i class="fa fa-plus" aria-hidden="true"></i> Create Habit
            </h4>
          </div>
          <div className="text-bold p-1">ACTIVE</div>
          <div className="task-type-container">
            <SqaureCard styleAdd={"bg-sky-blue"} />
            <SqaureCard styleAdd={"bg-light-red"} />
            <SqaureCard styleAdd={"bg-light-yellow"} />
            <SqaureCard styleAdd={"bg-light-green"} />
          </div>
          <div className="text-bold p-1">COMPLETED</div>
          <div className="task-type-container">
            <SqaureCard styleAdd={"bg-light-red"} />
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Home1;
