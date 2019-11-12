import { combineReducers } from 'redux';
import AuthReducers from './AuthReducers';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  auth: AuthReducers,
  employeeForm: EmployeeFormReducer,
  employees: EmployeeReducer
});
