import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './login/LoginForm';
import EmployeeList from './employee/list/EmployeeList';
import EmployeeCreate from './employee/create/EmployeeCreate';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>
      <Scene key="startAuthFlow" >
        <Scene
          key="goToLogin"
          component={LoginForm}
          title="Please log in"
          sceneStyle={style.scene}
          initial
        />
      </Scene>
      <Scene key="startMainFlow">
        <Scene
          key="goToEmployeeList"
          component={EmployeeList}
          title="Employees"
          rightTitle="Add"
          onRight={() => { Actions.goTpCreateEmployee(); }}
          sceneStyle={style.scene}
        />
        <Scene
          key="goTpCreateEmployee"
          component={EmployeeCreate}
          sceneStyle={style.scene}
        />
      </Scene>
    </Scene>
  </Router>
);

const style = {
  scene: {
    paddingTop: 65
  }
};

export default RouterComponent;
