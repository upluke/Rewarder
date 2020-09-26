import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(3),
    padding: theme.spacing(4),
    height: theme.spacing(55),
    backgroundColor: "blue",
  },

  //   paper: {
  //     padding: theme.spacing(2),
  //     textAlign: "center",
  //     color: theme.palette.text.secondary,
  //   },
}));

export default () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} lg={4}>
      {/* <Paper className={classes.paper}>item</Paper> */}
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5" component="h2">
            benevolent
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};
