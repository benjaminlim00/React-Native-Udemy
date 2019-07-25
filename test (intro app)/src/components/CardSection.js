import React from "react";
import { Text, View } from "react-native";

const CardSection = props => {
  const { containerStyle } = styles;

  return <View style={containerStyle}>{props.children}</View>;
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start", //up-down
    flexDirection: "row",
    position: "relative"
  }
};

export default CardSection;
