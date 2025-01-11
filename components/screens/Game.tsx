import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Scoreboard from "../Scoreboard";
import PlayerComparison from "../PlayerComparison";
import OutcomeButtons from "../OutcomeButtons";

type Props = {};

const Game = (props: Props) => {
  return (
    <View style={styles.main}>
      <Scoreboard />
      <View>
        <PlayerComparison />
        <OutcomeButtons />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  buttonContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  outComeButton: {
    borderColor: "black",
    borderWidth: 2,
    padding: 20,
    borderRadius: 10,
  },
  scoreContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  score: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
  middleText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "normal",
  },
});

export default Game;
