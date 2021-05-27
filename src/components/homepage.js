import React from "react";
import { Carousel } from "antd";
import { Divider } from "antd";
import Typewriter from "typewriter-effect";

const Homepage = () => {
  const contentStyle = {
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "gray",
  };

  return (
    <div
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "auto",
        marginBottom: "auto",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "30px", marginBottom: "40px" }}>
        {" "}
        <Typewriter
          options={{
            strings: ["Dive into world of Advertisements"],
            autoStart: true,
            loop: true,
            fontSize: 40,
          }}
        />
      </div>

      <Carousel autoplay dots={true} dotPosition='bottom' color={"black"}>
        <div style={contentStyle}>
          <img src='ad1.jpg' alt='ad1' height='400px' width='100%' />
          <Divider />
        </div>
        <div style={contentStyle}>
          <img src='ad2.jpg' alt='ad2' height='400px' width='100%' />
          <Divider />
        </div>
        <div style={contentStyle}>
          <img src='ad3.jpg' alt='ad3' height='400px' width='100%' />
          <Divider />
        </div>
      </Carousel>
      <Divider />
    </div>
  );
};

export default Homepage;
