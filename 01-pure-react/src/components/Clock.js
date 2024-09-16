import React, { useEffect, useState } from "react";
import "../index.css";

const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
  }, []);

  return <div className="Clock">{time}</div>;
};

export default Clock;
