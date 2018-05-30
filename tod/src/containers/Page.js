import React from 'react';
import MainMenu from '../components/MainMenu';
import Login from '../components/Login';
import Landing from '../components/Landing';
import NotFound from '../components/NotFound';
import UpcomingList from '../components/UpcomingList'
import Recover from '../components/Recover'
import Register from '../components/Register'
import { Switch, Route } from 'react-router-dom';
import { initializeStorage } from '../utils/AuthService';
import PrivateRoute from '../helpers/PrivateRoute';

class Page extends React.Component {

    constructor(props) {
        super(props);
        initializeStorage();
    }
    
    render() {
        return (
            <div>
                <MainMenu />
                <Switch>
                    <Route exact path="/" component={Landing}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/recover" component={Recover}/>
                    <Route path="/register" component={Register}/>
                    <PrivateRoute path="/home" component={UpcomingList}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
        )
    }
  }

  export default Page;