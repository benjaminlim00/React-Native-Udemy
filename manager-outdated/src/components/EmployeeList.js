import React, { Component } from 'react';
import { ListView } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { employeesFetch } from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentDidMount() {
    this.props.employeesFetch();
    this.createDataSource(this.props);
  }

  componentDidUpdate() {
    this.createDataSource(this.props);
  }

  createDataSource({ employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.dataSource = ds.cloneWithRows(employees);
  }

  renderRow = employee => <ListItem employee={employee} />;

  render() {
    return <ListView enableEmptySections dataSource={this.dataSource} renderRow={this.renderRow} />;
  }
}

const mapStateToProps = (state) => {
  const employees = _.map(state.employees, (val, uid) => ({ ...val, uid }));

  return { employees };
};

export default connect(
  mapStateToProps,
  { employeesFetch }
)(EmployeeList);
