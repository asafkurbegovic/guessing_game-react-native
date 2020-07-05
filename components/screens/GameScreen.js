import React, { useState, useRef, useEffect } from "react";
import { StyleSheet, View, Button, Text, Alert } from "react-native";
import Card from "../Card";

const numberGenerator = (min, max, curr) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randNum = Math.floor(Math.random() * (max - min)) + min;
  if (randNum === curr) {
    return numberGenerator(min, max, curr);
  } else {
    return randNum;
  }
};

const GameScreen = (props) => {
  const [compGuess, setCompGues] = useState(
    numberGenerator(1, 100, props.userInput)
  );
  const [rounds, setRound] = useState(0);

  const currUp = useRef(100);
  const currLow = useRef(1);
  const { userInput, onGameOver } = props;
  useEffect(() => {
    if (compGuess === userInput) {
      onGameOver(rounds);
    }
  }, [compGuess, userInput, onGameOver]);

  const nextNbr = (button) => {
    if (
      (button === "low" && compGuess < props.userInput) ||
      (button === "big" && compGuess > props.userInput)
    ) {
      Alert.alert("You cheater!!!", "Trying to fool me???", [
        { text: "return", style: "cancel" },
      ]);
      return;
    }
    if (button === "low") {
      currUp.current = compGuess;
    } else {
      currLow.current = compGuess;
    }
    const nextNbr = numberGenerator(currLow.current, currUp.current, compGuess);
    setCompGues(nextNbr);
    setRound((currounds) => currounds + 1);
  };

  return (
    <View style={style.screen}>
      <Text>Your number:</Text>
      <Card>
        <Text>{props.userInput}</Text>
      </Card>
      <Text>Opponent's guess</Text>
      <Card>
        <Text>{compGuess}</Text>
      </Card>
      <Card style={style.buttonView}>
        <Button title="LOWER" onPress={nextNbr.bind(this, "low")} />
        <Button title="GREATER" onPress={nextNbr.bind(this, "big")} />
      </Card>
    </View>
  );
};

const style = StyleSheet.create({
  screen: {
    padding: 20,
    flex: 1,
    alignItems: "center",
  },
  buttonView: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});

export default GameScreen;
