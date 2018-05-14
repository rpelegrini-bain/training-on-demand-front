import React from 'react';
import MainMenu from '../components/MainMenu';
import Login from '../components/Login';
import Home from '../components/Home';
import UpcomingList from '../components/UpcomingList'
import { Switch, Route } from 'react-router-dom';
import { isLoggedIn, initializeStorage } from '../utils/AuthService';
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
                    <Route exact path="/" component={Home}/>
                    <Route path="/login" component={Login}/>
                    <PrivateRoute path="/training" component={UpcomingList}/>
                </Switch>
            </div>
        )
    }
  }

  export default Page;