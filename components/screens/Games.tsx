import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import GameCard from "@/components/GameCard";

const Games = () => {
  const router = useRouter();

  const games = [
    {
      id: "1",
      homeTeam: "Mets",
      awayTeam: "Yankees",
      homeScore: 3,
      awayScore: 2,
      time: "7:00 PM",
    },
    {
      id: "2",
      homeTeam: "Dodgers",
      awayTeam: "Giants",
      homeScore: 5,
      awayScore: 3,
      time: "9:00 PM",
    },
    {
      id: "3",
      homeTeam: "Cubs",
      awayTeam: "Cardinals",
      homeScore: 1,
      awayScore: 4,
      time: "4:00 PM",
    },
  ];

  const renderGame = ({ item }: { item: (typeof games)[0] }) => (
    <GameCard game={item} onPress={() => router.push(`/game/${item.id}`)} />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={renderGame}
        contentContainerStyle={styles.listContent}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 10,
  },
  listContent: {
    paddingBottom: 20,
  },
  separator: {
    height: 10,
  },
});

export default Games;
