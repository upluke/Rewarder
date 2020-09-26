import React, { useState } from "react";
import Cards from "./Cards";

export default () => {
  const [rewards, setRewards] = useState([
    { id: 1, cardTitle: "Time Novice", emoji: "🍦" },
    { id: 2, cardTitle: "Time Wizard", emoji: "🍓" },
    { id: 3, cardTitle: "Master of TIme and Space!", emoji: "🍿" },
  ]);
  return (
    <div>
      Home...
      <Cards />
      Break
    </div>
  );
};
