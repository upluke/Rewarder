import React, { useState } from "react";
import Cards from "./Cards";

import { makeStyles } from "@material-ui/core/styles";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 60,
    display: "flex",
    justifyContent: "center",
  },
}));

export default () => {
  // data base
  const [rewards, setRewards] = useState([
    {
      id: 1,
      cardTitle: "Time Novice",
      emoji: "🍦",
      color: "#aa96da",
      time: 6 / 6,
      light: "off",
    },
    {
      id: 2,
      cardTitle: "Time Wizard ",
      emoji: "🍓",
      color: "#fcbad3",
      time: 5 / 6,
      light: "off",
    },
    {
      id: 3,
      cardTitle: "Master Monster",
      emoji: "🍿",
      color: "#ffffd2",
      time: 4 / 6,
      light: "off",
    },
    {
      id: 4,
      cardTitle: "Time Master",
      emoji: "🍟",
      color: "#d6e0f0",
      time: 3 / 6,
      light: "off",
    },
    {
      id: 5,
      cardTitle: "Time Start",
      emoji: "⭐️",
      color: "#99f3bd",
      time: 2 / 6,
      light: "off",
    },
    {
      id: 6,
      cardTitle: "Master Champion",
      emoji: "🏅",
      color: "#ffbb91",
      time: 1 / 6,
      light: "off",
    },
  ]);
  const classes = useStyles();
  const [isPlay, setIsPlay] = useState(true);
  const [userTime, setUserTime] = useState(0);
  const [tempUserTime, setTempUserTime] = useState(0);
  const [timeRemained, setTimeRemained] = useState(0);
  const [toggle, setToggle] = useState(true);
  const remainTime = ({ remainingTime }) => {
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    setTimeRemained(remainingTime);
    return `${minutes}:${seconds}`;
  };

  const lightControl = (id) => {
    console.log("in the control ", id);
    const undateLight = rewards.map((el) => {
      if (el.id === id) {
        return { ...el, light: "on" };
      }
      return el;
    });
    console.log("updatelight:", undateLight);
    setRewards(undateLight);
  };

  const handleUsertime = () => {
    setUserTime(tempUserTime);
    setTempUserTime(0);
  };

  const handleToggle = () => {
    setIsPlay(!isPlay);
    setToggle(!toggle);
  };

  console.log("light:", rewards.light);
  console.log(typeof userTime);
  return (
    <div>
      <div className={classes.root}>
        {userTime ? (
          // timer libary
          <CountdownCircleTimer
            isPlaying={isPlay ? true : false}
            duration={userTime}
            colors={[
              ["#004777", 0.33],
              ["#F7B801", 0.33],
              ["#A30000", 0.33],
            ]}
          >
            {remainTime}
          </CountdownCircleTimer>
        ) : null}

        <br />
      </div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="standard-basic"
          label="Enter a number "
          onChange={(e) => {
            setTempUserTime(parseInt(e.target.value));
          }}
        />
        <Button variant="contained" color="secondary" onClick={handleUsertime}>
          Submit
        </Button>
        <Button variant="contained" color="primary" onClick={handleToggle}>
          {" "}
          {!toggle ? "Start" : "Pause"}
        </Button>
      </form>
      <Cards
        timeRemained={timeRemained}
        userTime={userTime}
        rewards={rewards}
        lightControl={lightControl}
      />
      Break
    </div>
  );
};
