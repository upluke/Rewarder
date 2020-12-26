import React, { useState,useEffect } from "react";
import Cards from "./Cards";
import { makeStyles } from "@material-ui/core/styles";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import data from "../data"
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: 30,
    display: "flex",
    justifyContent: "center",
  },
}));

export default () => {
  const [rewards, setRewards] = useState(data);
  const [userTime, setUserTime] = useState(0);
  const [tempUserTime, setTempUserTime] = useState(0);
  const [timeRemained, setTimeRemained] = useState(0);
  const [toggle, setToggle] = useState(true);
  const classes = useStyles();
  
  useEffect(()=>{
    if (timeRemained===0){
      setUserTime(0)
      setRewards(data)
    }
  },[timeRemained])

  const remainTime = ({ remainingTime }) => {
    console.log("remainingTime:",remainingTime)
    const minutes = Math.floor(remainingTime / 60);
    const seconds = remainingTime % 60;

    setTimeRemained(remainingTime); // one of the problems is here
    return `${minutes}:${seconds}`;
  };

  const lightControl = (id) => {
    
    const undateLight = rewards.map((el) => {
      if (el.id === id) {
        return { ...el, light: "on" };
      }
      return el;
    });
    setRewards(undateLight);
  };

  const handleSubmit = () => {
    setUserTime(tempUserTime);
    setTempUserTime(0);
  };

  const handleToggle = () => {
    setToggle(!toggle);
  };

 
 console.log("remaintime: ",timeRemained)
  return (
    <div>
      <div className={classes.root}>
        {userTime!==0 ? (
          // timer libary
          <CountdownCircleTimer
            isPlaying={toggle ? true : false}
            duration={userTime}
            colors={[
              ["#004777", 0.33],
              ["#F7B801", 0.33],
              ["#A30000", 0.33],
            ]}
          >
            {remainTime}
          </CountdownCircleTimer>
        ) : <div> 
          <h5>Please enter a number and click the SUBMIT button.</h5>
          <TextField 
            label="Enter a number "
            value={tempUserTime}
            onChange={(e) => {
              setTempUserTime(parseInt(e.target.value));
            }}
          /></div>}
 
      </div>
      <form className={classes.root} noValidate autoComplete="off">

        <Button variant="contained" color="secondary" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="contained" color="primary" onClick={handleToggle}>
          {!toggle ? "Restart" : "Pause"}
        </Button>
      </form>
      <Cards
        timeRemained={timeRemained}
        userTime={userTime}
        rewards={rewards}
        lightControl={lightControl}
      />
 
    </div>
  );
};
