import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface GameCardProps {
  game: {
    id: string;
    homeTeam: string;
    awayTeam: string;
    homeScore: number;
    awayScore: number;
    time: string;
  };
  onPress: () => void;
}

const GameCard: React.FC<GameCardProps> = ({ game, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <View style={styles.teamContainer}>
        <Text style={styles.teamText}>{game.awayTeam}</Text>
        <Text style={styles.scoreText}>{game.awayScore}</Text>
      </View>
      <View style={styles.teamContainer}>
        <Text style={styles.teamText}>{game.homeTeam}</Text>
        <Text style={styles.scoreText}>{game.homeScore}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeText}>{game.time}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#1E1E1E",
    padding: 15,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  teamContainer: {
    alignItems: "center",
  },
  teamText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  scoreText: {
    color: "#FFD700",
    fontSize: 14,
  },
  timeContainer: {
    alignItems: "center",
  },
  timeText: {
    color: "#FFF",
    fontSize: 14,
    fontStyle: "italic",
  },
});

export default GameCard;
