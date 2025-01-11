import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  ListRenderItem,
} from "react-native";

const OutcomeButtons: React.FC = () => {
  const [selectedOutcome, setSelectedOutcome] = useState<string | null>("Out");

  const outcomes: Record<string, string[]> = {
    Out: ["Flyout", "Popout", "Groundout", "Strikeout"],
    Hit: ["Single", "Double", "Triple", "Homerun"],
    Walk: ["", "", "", ""],
  };

  const renderOptions: ListRenderItem<string> = ({ item }) => (
    <Text style={styles.optionText}>{item}</Text>
  );

  return (
    <View style={styles.container}>
      {/* Buttons */}
      <View style={styles.buttonContainer}>
        {Object.keys(outcomes).map((outcome) => (
          <TouchableOpacity
            key={outcome}
            style={[
              styles.outComeButton,
              selectedOutcome === outcome && styles.selectedButton,
            ]}
            onPress={() => setSelectedOutcome(outcome)}
          >
            <Text
              style={[
                styles.buttonText,
                selectedOutcome === outcome && styles.selectedButtonText,
              ]}
            >
              {outcome}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Outcome Options */}
      {selectedOutcome && outcomes[selectedOutcome].length > 0 && (
        <FlatList
          data={outcomes[selectedOutcome]}
          keyExtractor={(item, index) => `${item}-${index}`}
          renderItem={renderOptions}
          style={styles.optionsContainer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#121212",
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 20,
  },
  outComeButton: {
    backgroundColor: "#333",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
  },
  selectedButton: {
    backgroundColor: "#555",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  selectedButtonText: {
    fontWeight: "bold",
    color: "#FFD700",
  },
  optionsContainer: {
    backgroundColor: "#1E1E1E",
    padding: 10,
    borderRadius: 5,
  },
  optionText: {
    color: "#FFF",
    fontSize: 14,
    paddingVertical: 5,
  },
});

export default OutcomeButtons;
