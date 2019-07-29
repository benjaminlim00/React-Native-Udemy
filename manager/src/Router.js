import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';


const RouterComponent = () => (
  <Router navigationBarStyle={{ backgroundColor: '#1e2226' }} titleStyle={{ color: '#FFF' }}>
    <Scene key="root" hideNavBar>
      <Scene key="auth">
        <Scene key="login" component={LoginForm} title="Please Login" initial />

      </Scene>
      <Scene key="main">
        <Scene
          initial
          rightTitle="Add"
          onRight={() => { Actions.employeeCreate(); }}
          key="employeeList"
          component={EmployeeList}
          title="Employees"
        />
        <Scene

          key="employeeCreate"
          component={EmployeeCreate}
          title="Create Employee"
        />
      </Scene>
    </Scene>

  </Router>
);

export default RouterComponent;
