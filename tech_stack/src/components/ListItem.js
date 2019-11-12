import React, { Component } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  UIManager,
  LayoutAnimation
} from "react-native";
import { connect } from "react-redux";
import { CardSection } from "./common";
import * as actions from "../actions";

class Listitem extends Component {
  componentDidUpdate() {
    UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  renderDescription() {
    const { library, expanded } = this.props;
    // if (library.item.id === selectedLibraryId) {
    //   return <Text>{library.item.description}</Text>;
    // }

    if (expanded) {
      return (
        <CardSection>
          <Text style={{ flex: 1 }}>{library.item.description}</Text>
        </CardSection>
      );
    }
  }
  render() {
    console.log(this.props);
    const { titleStyle } = styles;
    const { id, title } = this.props.library.item;

    return (
      <TouchableWithoutFeedback onPress={() => this.props.selectLibrary(id)}>
        <View>
          <CardSection>
            <Text style={titleStyle}>{title}</Text>
          </CardSection>
          {this.renderDescription()}
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
});

const mapStateToProps = (state, ownProps) => {
  const expanded = state.selectedLibraryId === ownProps.library.item.id;
  return { expanded };

  // return {
  //   selectedLibraryId: state.selectedLibraryId
  // };
};

export default connect(
  mapStateToProps,
  actions
)(Listitem);
