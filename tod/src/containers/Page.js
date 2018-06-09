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
import TopicList from '../components/TopicList';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import red from '@material-ui/core/colors/red'

const theme = createMuiTheme({
    palette: {
        primary: {main: red[900]},
        secondary: {main: red[900]}
    }
});

class Page extends React.Component {

    constructor(props) {
        super(props);
        initializeStorage();
    }
    
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <div>
                    <MainMenu />
                    <Switch>
                        <Route exact path="/" component={Landing}/>
                        <Route path="/login" component={Login}/>
                        <Route path="/recover" component={Recover}/>
                        <Route path="/register" component={Register}/>
                        <PrivateRoute path="/home" component={UpcomingList}/>
                        <PrivateRoute path="/topic" component={TopicList}/>
                        <Route component={NotFound}/>
                    </Switch>
                </div>
            </MuiThemeProvider>
        )
    }
  }

  export default Page;