import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PlayerComparison = () => {
  return (
    <View style={styles.container}>
      {/* Player 1 */}
      <View style={styles.playerContainer}>
        <Image
          source={require("@/assets/images/aaronjudge.jpeg")}
          style={styles.playerImage}
          resizeMode="contain"
        />
        <Text style={styles.playerName}>Senga</Text>
        <Text style={styles.playerRole}>RHP</Text>
        <Text style={styles.playerStats}>43 P 2.2 IP, 6 K, 2 ER</Text>
      </View>

      {/* Center Info */}
      <View style={styles.centerContainer}>
        <Image
          source={require("@/assets/images/diamond.jpeg")}
          style={styles.basesIcon}
          resizeMode="contain"
        />
        <Text style={styles.score}>1 - 2</Text>
        <View style={styles.ballsStrikes}>
          <View style={styles.dot} />
          <View style={styles.dot} />
          <View style={styles.dotEmpty} />
        </View>
      </View>

      {/* Player 2 */}
      <View style={styles.playerContainer}>
        <Image
          source={require("@/assets/images/aaronjudge.jpeg")}
          style={styles.playerImage}
          resizeMode="contain"
        />
        <Text style={styles.playerName}>Stanton</Text>
        <Text style={styles.playerRole}>DH</Text>
        <Text style={styles.playerStats}>1 - 1 HR, R, 2 RBI</Text>
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
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  playerContainer: {
    alignItems: "center",
    width: "30%",
  },
  playerImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 8,
  },
  playerName: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  playerRole: {
    color: "#CCC",
    fontSize: 12,
  },
  playerStats: {
    color: "#FFF",
    fontSize: 12,
    textAlign: "center",
    marginTop: 4,
  },
  centerContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  basesIcon: {
    width: 30,
    height: 30,
    marginBottom: 5,
  },
  score: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  ballsStrikes: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#FFF",
    marginHorizontal: 3,
  },
  dotEmpty: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "#555",
    marginHorizontal: 3,
  },
});

export default PlayerComparison;
