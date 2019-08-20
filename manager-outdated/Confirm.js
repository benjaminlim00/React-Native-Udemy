import React, { Component } from 'react';
import {
  Text, View, Modal, StyleSheet
} from 'react-native';
// avoid circular dependency
// import {CardSection, Button} from './'
import { CardSection } from './src/components/commons/CardSection';
import { Button } from './Button';

const Confirm = ({
  children, visible, onAccept, onDecline
}) => {
  const { containerstyle, textStyle, cardSectionStyle } = this.styles;
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={() => {}}>
      <View style={containerStyle}>
        <CardSection style={cardSectionStyle}>
          <Text style={textStyle}>{children}</Text>
        </CardSection>

        <CardSection>
          <Button onPress={onAccept}>Yes</Button>
          <Button onPress={onDecline}>No</Button>
        </CardSection>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  cardSectionStyle: {
    jutsifyContent: 'center'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
});

export { Confirm };
