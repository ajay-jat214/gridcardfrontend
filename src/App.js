import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import "./App.css";

function App() {
  return (
    <Grid
      container
      lg={6}
      xl={6}
      xs={12}
      sm={8}
      md={6}
      direction='column'
      style={{ borderBottom: "0.5px solid gray" }}
    >
      <Grid
        item
        style={{
          background: "red",
          color: "white",
          height: "80px",
          textAlign: "center",
        }}
      >
        <span style={{ fontSize: "50px" }}>FIND A TEAM</span>
      </Grid>
      <Grid item container className='fields' style={{ marginTop: "20px" }}>
        <Grid lg={2} sm={2} xs={1} />
        <Grid lg={3}>
          <span style={{ fontSize: "20px" }}>In Game Name</span>
        </Grid>
        <Grid>
          <input
            type='text'
            placeholder='ENTER IGN'
            className='button-slanted-content'
            style={{ border: "1px solid" }}
          />
        </Grid>
      </Grid>
      <Grid item container className='fields'>
        <Grid lg={2} sm={2} xs={2} />
        <Grid lg={3}>
          <span style={{ fontSize: "20px" }}>Game ID</span>
        </Grid>
        <Grid>
          <input
            type='text'
            placeholder='ENTER GAME ID'
            className='button-slanted-content'
            style={{ border: "1px solid" }}
          />
        </Grid>
      </Grid>
      <Grid item container className='fields' style={{ paddingBottom: "80px" }}>
        <Grid lg={5} sm={2} xs={2} />
        <input
          className='button-slanted-content'
          value='PAY & REGISTER'
          type='button'
          style={{
            background: "red",
            color: "white",
            border: "none",
            height: "30px",
            fontSize: "15px",
            cursor: "pointer",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default App;
