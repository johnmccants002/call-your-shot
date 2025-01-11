import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import Scoreboard from "../Scoreboard";
import PlayerComparison from "../PlayerComparison";
import OutcomeButtons from "../OutcomeButtons";
import UserScore from "../UserScore";

type Props = {};

const Game = (props: Props) => {
  return (
    <View style={styles.main}>
      <View>
        <Scoreboard />
        <UserScore
          profilePicture="https://i.imgur.com/hCwHtRc.png"
          username="JohnMcCants"
          score={70}
        />
        <View>
          <Image
            source={require("@/assets/images/metsstadium.jpeg")}
            resizeMode="stretch"
            style={{ height: 250, width: "auto" }}
          />
        </View>
      </View>
      <View>
        <View>
          <PlayerComparison />
          <OutcomeButtons />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
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
