import React from "react";
import Container from "../../components/Container";
import ContentBox from "./ContentBox";

const Home = () => {
  return (
    <Container styleClass={"main-container"}>
      <Container styleClass={"shadow-container center"}>
        <ContentBox/>
        <div className="w-half d-flex p-1">
          <img src="./act.svg" />
        </div>
      </Container>
    </Container>
  );
};

export default Home;
