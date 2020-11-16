import React, { Component, useState, useEffect } from "react";
import '../styles/App.css';

const App = () => {
  let timerId = ""
  let [timeLeft, setReverseCount] = useState(0);


  useEffect(() => {
    if (timeLeft > 0) {
      timerId = setTimeout(() => {
        setReverseCount(timeLeft - 1)
      }, 1000);
    }
  }, [timeLeft])


  const countInReverse = (e) => {
    if (e.keyCode === 13) {
      clearTimeout(timerId)
      let timeCountValue = document.getElementById('timeCount').value;
      if (!isNaN(timeCountValue)) {

        setReverseCount(parseInt(timeCountValue), timeLeft);
      } else {
        if (timerId !== "") {
          clearTimeout(timerId)
        }
        setReverseCount(0, timeLeft)
      }
    }
  }

  return (
    <div className="wrapper">
      <div id="whole-center"><h1>Count in Reverse for<input id="timeCount" onKeyDown={countInReverse} /> sec. </h1>
      </div>
      <div id="current-time">{timeLeft}</div>
    </div>
  )
}


export default App;
