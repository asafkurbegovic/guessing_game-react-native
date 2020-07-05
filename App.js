import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Beginscreen from "./components/screens/StartGame";
import GameScreen from "./components/screens/GameScreen";
import GameOver from "./components/screens/GameOver";
import * as Font from "expo-font";
import { AppLoading } from "expo";

/*const setFont = () => {
  Font.loadAsync({
    someinterestingfont: require("./assets/fonts/Modak-Regular.ttf"),
    //'niceone': require("./assets/fonts/Yellowtail-Regular.ttf"),
  });
};*/

export default function App() {
  const [usrNbr, setUsrNbr] = useState();
  const [currRound, setCurrRound] = useState(0);
 /* const [dataLoaded, setDataLoaded] = useState(false);

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={setFont}
        onFinish={() => setDataLoaded(true)}
        onError={(error) => console.log(error)}
      />
    );
  }
*/
  const configuration = () => {
    setCurrRound(0);
    setUsrNbr(null);
  };

  const starGame = (chooseNbr) => {
    setUsrNbr(chooseNbr);
    setCurrRound(0);
  };

  const gameOver = (nbrofRnds) => {
    setCurrRound(nbrofRnds);
  };

  let presentedScreen = <Beginscreen onStartGame={starGame} />;
  if (usrNbr && currRound <= 0) {
    presentedScreen = <GameScreen userInput={usrNbr} onGameOver={gameOver} />;
  } else if (currRound > 0) {
    presentedScreen = <GameOver rounds={currRound} onRestart={configuration} />;
  }

  return (
    <View style={styles.screen}>
      <Header title="Numberino" />
      {presentedScreen}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
