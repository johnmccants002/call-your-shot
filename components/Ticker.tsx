import { MotiView } from "moti";
import React from "react";
import { Text, View, TextProps } from "react-native";

type Props = {
  value: number;
};

type TickerListProps = {
  number: number;
  fontSize: number;
  index: number;
};

const numbersToNice = [...Array(10).keys()]; // [0,1,2,3,4,5,6,7,8,9]
const _stagger = 50;
const Tick = ({ children, ...rest }: TextProps) => {
  return <Text {...rest}>{children}</Text>;
};
const TickerList = ({ number, fontSize, index }: TickerListProps) => {
  return (
    <View
      style={{ height: fontSize, backgroundColor: "white", overflow: "hidden" }}
    >
      <MotiView
        style={{
          backgroundColor: "#121212",
        }}
        animate={{ translateY: -fontSize * 1.1 * number }}
        transition={{ delay: index * _stagger, damping: 80, stiffness: 200 }}
      >
        {numbersToNice.map((num, index) => {
          return (
            <Tick
              key={`number-${num}-${index}`}
              style={{
                fontSize: fontSize,
                lineHeight: fontSize * 1.1,
                fontVariant: ["tabular-nums"],
                fontWeight: "700",
                color: "white",
              }}
            >
              {num}
            </Tick>
          );
        })}
      </MotiView>
    </View>
  );
};

const Ticker = ({
  value = 12385,
  fontSize = 50,
}: {
  value: number;
  fontSize: number;
}) => {
  const splitValue = value.toString().split("");
  return (
    <View>
      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {splitValue.map((number, index) => {
          return (
            <TickerList
              number={parseInt(number)}
              key={index}
              fontSize={fontSize}
              index={index}
            />
          );
        })}
      </View>
    </View>
  );
};

export default Ticker;
