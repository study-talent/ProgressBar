import React, { useState } from 'react';
import { View } from 'react-native';

function ProgressBar(props) {
    const [counter,setCounter] = useState(10);
    if(counter<=100) {
      setTimeout(() => {
      setCounter(counter+10)
  }, 10000);
  }
    return (
      <View style={{  height:50, backgroundColor: "blue", width:`${counter}%` }} />
    );
  }

export default ProgressBar;