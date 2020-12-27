import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 40,
  },
}));

export default ({ rewards, timeRemained, lightControl, userTime }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {rewards.map((reward) => (
          <Card
            key={reward.id}
            {...reward}
            timeRemained={timeRemained}
            lightControl={lightControl}
            userTime={userTime}
          />
        ))}
      </Grid>
    </div>
  );
};
