import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Card from "../Card";

const GameOver = (props) => {
  return (
    <View style={style.screen}><Card>
      <Text style={style.textstyle}>GAME OVER!</Text>
      <Text style={style.textstyle}>Number of rounds that took me to guess youe number is:</Text>
      </Card>
      <Card  style={style.cardStyle}><Text  style={style.textstyle}>{props.rounds}</Text></Card>
      <Button title="new game" onPress={props.onRestart} />
    
    </View>

  );
};

const style = StyleSheet.create({
  screen: {
    padding:20,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textstyle:{
    fontSize:36,
    alignItems:'center'
    //fontFamily:'niceone',
  },
  cardStyle:{
    fontSize:36,
    borderColor:'red',
    borderWidth:2
  }
});

export default GameOver;
