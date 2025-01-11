import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Scoreboard = () => {
  return (
    <View style={styles.container}>
      {/* Left Side */}
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>NYM</Text>
        <Text style={styles.teamRecord}>45-40</Text>
      </View>
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/mets.png")}
          resizeMode="contain"
          style={styles.teamLogo}
        />
      </View>

      {/* Center - Score */}
      <View style={styles.scoreContainer}>
        <Text style={styles.score}>2</Text>
        <Text style={styles.middleText}>BOT 3</Text>
        <Text style={styles.score}>2</Text>
      </View>

      {/* Right Side */}
      <View style={styles.logoContainer}>
        <Image
          source={require("@/assets/images/mets.png")}
          resizeMode="contain"
          style={styles.teamLogo}
        />
      </View>
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>NYY</Text>
        <Text style={styles.teamRecord}>45-40</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#121212",
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  teamContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  teamName: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  teamRecord: {
    color: "#FFF",
    fontSize: 12,
  },
  logoContainer: {
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  teamLogo: {
    width: 40,
    height: 40,
    borderRadius: 20,
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

export default Scoreboard;
