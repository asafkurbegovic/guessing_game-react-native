import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const GameOver = (props) => {
  return (
    <View style={style.screen}>
      <Text style={style.textstyle}>Game oveeeer bitch!</Text>
      <Text style={style.textstyle}>Number of rounds that took me to guess youe number is:</Text>
      <Text>{props.rounds}</Text>
      <Button title="new game" onPress={props.onRestart} />
    </View>
  );
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textstyle:{
    fontFamily:'niceone',
  }
});

export default GameOver;
