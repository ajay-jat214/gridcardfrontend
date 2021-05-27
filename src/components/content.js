import React from "react";
import Grid from "@material-ui/core/Grid";
import CardItems from "./cardItems";

export default function Content(props) {
  const funCall = (value, key) => {
    return (
      <Grid container item xs={12} sm={4}>
        <Grid xs={2} />
        <Grid item>
          <CardItems value={value} key={key} />
        </Grid>
        <Grid xs={2} />
      </Grid>
    );
  };

  return (
    <Grid container direction='row'>
      <Grid item sm={0} xs={1} />
      <Grid item container spacing={3}>
        {props.data.map((value, key) => funCall(value, key))}
      </Grid>
    </Grid>
  );
}
