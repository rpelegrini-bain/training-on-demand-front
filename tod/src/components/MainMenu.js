import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import LinkButton from '../components/LinkButton'
import IconButton from 'material-ui/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { isLoggedIn, logout } from '../utils/AuthService';
import { Link } from 'react-router-dom'

const styles = {
    root: {
      flexGrow: 1,
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
  };

function handleLogout() {
  logout();
}

function MainMenu(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Training On-Demand
          </Typography>
          {(isLoggedIn()) ?
            (<LinkButton color="inherit" to="/" onClick={handleLogout}>Logout</LinkButton>):
            (<LinkButton color="inherit" to="/login">Login</LinkButton>)}
        </Toolbar>
      </AppBar>
    </div>
  );
}
  
  MainMenu.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MainMenu);
  