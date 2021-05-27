import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { CardHeader, Avatar, IconButton, CardMedia } from "@material-ui/core";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles((theme) => ({
  imageHeight: {
    objectFit: "cover",
  },
  FullHeight: {
    height: "100%",
  },
}));

export default function CardItems(props) {
  const classes = useStyles();
  var a = props.value.first_name.slice(0, 1);
  var b = props.value.last_name.slice(0, 1);
  return (
    <Card className={classes.FullHeight}>
      <CardHeader
        avatar={<Avatar aria-label='recipe'>{a + b}</Avatar>}
        action={
          <IconButton aria-label='settings'>
            <ShareIcon />
          </IconButton>
        }
        title={props.value.first_name + " " + props.value.last_name}
      />
      <CardMedia
        className={classes.imageHeight}
        style={{ height: "200px" }}
        image={props.value.avatar}
        contained
      />
      <CardContent>
        <Typography variant='body2' component='p'>
          {props.value.email}
        </Typography>
      </CardContent>
      <CardActions></CardActions>
    </Card>
  );
}
