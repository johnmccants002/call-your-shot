import React, { useEffect, useState } from "react";
import { Image, StyleSheet, View, ImageBackground } from "react-native";
import OutcomeButtons from "../OutcomeButtons";
import PlayerComparison from "../PlayerComparison";
import Scoreboard from "../Scoreboard";
import UserScore from "../UserScore";
import { mockPlays } from "@/data/mockPlays";
import LivePlay from "../LivePlay";
import { Play } from "@/types/Plays";
type Props = {};

const scores = [30, 45, 85];

const Game = (props: Props) => {
  const [currentPlay, setCurrentPlay] = useState<Play>(mockPlays[0]);
  const [playIndex, setPlayIndex] = useState(0);
  const [score, setScore] = useState(scores[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlayIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % mockPlays.length;
        setCurrentPlay(mockPlays[nextIndex]);
        return nextIndex;
      });
      // Increment the score by a random number divisible by 5
      setScore((prevScore) => {
        const randomIncrement = Math.ceil(Math.random() * 10) * 5; // Random increment (5, 10, ..., 50)
        return prevScore + randomIncrement; // Ensure it's always greater than the previous score
      });
    }, 10000); // Change play every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <View style={styles.main}>
      <View>
        <Scoreboard />
        <UserScore
          profilePicture="https://i.imgur.com/hCwHtRc.png"
          username="JohnMcCants"
          score={score}
        />
        <View>
          <ImageBackground
            source={require("@/assets/images/metsstadium.jpeg")}
            resizeMode="stretch"
            style={{ height: 250, width: "auto" }}
          >
            <LivePlay play={currentPlay} />
          </ImageBackground>
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
