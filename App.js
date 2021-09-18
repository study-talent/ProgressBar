import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

function ProgressBar(props) {
  const [counter, setCounter] = useState(10);
  if (counter <= 100) {
    setTimeout(() => {
      setCounter(counter + 10);
    }, 10000);
  }

  return (
    <View
      style={{ height: 50, backgroundColor: "blue", width: `${counter}%` }}
    />
  );
}

function App() {
  return (
    <View style={styles.app}>
      <Text style={styles.title}>Progress Bar with 10 sec</Text>
      <ProgressBar />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
    padding: 20,
    flexDirection: "column"
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  }
});

export default App;
