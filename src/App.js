import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Header from "./components/header";
import Content from "./components/content";
import Homepage from "./components/homepage";
import ReactLoading from "react-loading";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);
  const callBack = () => {
    setLoader(true);
    fetch("https://reqres.in/api/users?page=1", {
      method: "get",
      headers: { Authentication: "Content-Type:application/json" },
    })
      .then((response) => response.json())
      .then((data1) => {
        setData([...data1.data]);
        setTimeout(function () {
          setLoader(false);
        }, 1000);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Grid container direction='column' className='App'>
      <Grid item>
        <Header callBack={callBack} />
      </Grid>
      <Grid item container style={{ marginTop: "50px" }}>
        <Grid item sm={2} xs={4} />
        <Grid item xs={12} sm={8}>
          {data.length === 0 ? (
            <div
              style={{
                textAlign: "center",
              }}
            >
              <Homepage />
            </div>
          ) : loader === true ? (
            <div style={{ textAlign: "center" }}>
              <ReactLoading
                type={"cylon"}
                color={"purple"}
                style={{
                  textAlign: "center",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "50px",
                  height: "64px",
                  width: "64px",
                }}
              />
            </div>
          ) : (
            <Content data={data} />
          )}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default App;
