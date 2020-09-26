import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";

import CardContent from "@material-ui/core/CardContent";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    padding: theme.spacing(4),
    height: theme.spacing(55),
    width: theme.spacing(49),
  },
}));

export default ({
  id,
  cardTitle,
  emoji,
  color,
  time,
  timeRemained,
  lightControl,
  light,
  userTime,
}) => {
  const classes = useStyles();

  console.log(time, timeRemained, userTime, "total: ", time * userTime);
  React.useEffect(() => {
    // compre to usertime with time
    if (Math.floor(time * userTime) == timeRemained) {
      lightControl(id);
    }
  }, [timeRemained]);
  console.log(id, "real light: ", light);
  return (
    <Grid item xs={12} sm={6} lg={4}>
      <Button
        disabled={light === "off" ? true : false}
        className={classes.root}
        style={{ backgroundColor: color }}
        // onClick={() => setEmojiSwitch(!emojiSwitch)}
      >
        <Typography variant="h5">{cardTitle}</Typography>

        <Typography variant="h1">{emoji}</Typography>
      </Button>
    </Grid>
  );
};
