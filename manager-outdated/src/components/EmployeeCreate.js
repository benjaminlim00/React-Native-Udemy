import React from 'react';
import { connect } from 'react-redux';
import { Picker, Text, StyleSheet } from 'react-native';
import { employeeUpdate, employeeCreate } from '../actions';
import {
  Card, CardSection, Input, Button
} from './common';

class EmployeeCreate extends React.Component {
  onButtonPress = () => {
    const { name, phone, shift } = this.props;
    this.props.employeeCreate({ name, phone, shift: shift || 'Monday' });
  };

  render() {
    const { name, phone, shift } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="name"
            placholder="Jane"
            value={name}
            onChangeText={(value) => {
              this.props.employeeUpdate({ prop: 'name', value });
            }}
          />
        </CardSection>
        <CardSection>
          <Input
            label="phone"
            placholder="5555-5555"
            value={phone}
            onChangeText={(value) => {
              this.props.employeeUpdate({ prop: 'phone', value });
            }}
          />
        </CardSection>

        <CardSection style={{ flexDirection: 'column' }}>
          <Text style={styles.pickerTextStyle}>Shift</Text>
          <Picker
            selectedValue={shift}
            onValueChange={(value) => {
              this.props.employeeUpdate({ prop: 'shift', value });
            }}
          >
            <Picker.Item label="Monday" value="Monday" />
            <Picker.Item label="Tuesday" value="Tuesday" />
            <Picker.Item label="Wednesday" value="Wednesday" />
            <Picker.Item label="Thursday" value="Thursday" />
            <Picker.Item label="Friday" value="Friday" />
            <Picker.Item label="Saturday" value="Saturday" />
            <Picker.Item label="Sunday" value="Sunday" />
          </Picker>
        </CardSection>
        <CardSection>
          <Button onPress={this.onButtonPress}>Create</Button>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  pickerTextStyle: {
    fontSize: 18,
    paddingLeft: 20
  }
});

const mapStateToProps = (state) => {
  const { name, phone, shift } = state.employeeForm;
  return { name, phone, shift };
};

export default connect(
  mapStateToProps,
  { employeeUpdate, employeeCreate }
)(EmployeeCreate);
