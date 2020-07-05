import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from "react-native";
import Card from "../Card";

const Beginscreen = (props) => {
  const [values, setvalues] = useState("");
  const [confirm, isConfirmed] = useState(false);
  const [number, setNumber] = useState();

  const onlynubers = (input) => {
    setvalues(input.replace(/[^0-9]/g, ""));
  };

  const reset = () => {
    setvalues("");
    isConfirmed(true);
  };

  const confirmInput = () => {
    const theNumber = parseInt(values);
    if (isNaN(theNumber) || theNumber < 1 || theNumber > 99) {
      Alert.alert("Invalid input", "Choose integer between 1 and 99", [
        { text: "Return", style: "destructive", onPress: reset },
      ]);
      return;
    }

    isConfirmed(true);
    setNumber(theNumber);
    setvalues("");
    Keyboard.dismiss();
  };

  let checker;
  if (confirm) {
    checker = (
      <Card style={style.confirmcard}>
        <Text>Entered number:</Text>
        <Card
          style={{
            fontSize: 30,
            marginVertical: 20,
            borderColor: "blue",
            borderWidth: 1,
          }}
        >
          <Text>{number}</Text>
        </Card>
        <Button title="START GAME" onPress={() => props.onStartGame(number)} />
      </Card>
    );
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={style.firstScreen}>
        <Text style={style.Text}>Start guessing game</Text>
        <Card style={style.innerContainer}>
          <Text>Enter your number</Text>
          <TextInput
            placeholder="Here"
            onChangeText={onlynubers}
            value={values}
            blurOnSubmit
            autoCorrect={false}
            keyboardType="number-pad"
            maxLength={2}
            style={style.input}
          />
          <View style={style.buttonContainer}>
            <Button title="Reset" color="red" onPress={reset} />
            <Button title="CONFIRM" onPress={confirmInput} />
          </View>
        </Card>
        {checker}
      </View>
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  Text: {
  //  fontFamily:'niceone',
    fontSize: 24,
  },
  firstScreen: {
    padding: 10,
    flex: 1,
    alignItems: "center",
  },
  innerContainer: {
    alignItems: "center",
    width: "80%",
  },
  buttonContainer: {
    padding: "5%",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  input: {
    textAlign: "center",
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  confirmcard: {
    borderColor: "red",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: "10%",
  },
});

export default Beginscreen;
