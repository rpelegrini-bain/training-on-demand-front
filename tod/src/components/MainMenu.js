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
import { Manager, Target, Popper } from 'react-popper';
import Collapse from '@material-ui/core/Collapse';
import Portal from '@material-ui/core/Portal';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const styles = theme => ({
    root: {
      flexGrow: 1,
      display: "flex",
    },
    flex: {
      flex: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    popperClose: {
      pointerEvents: 'none',
    },
    menuItem: {
      textDecoration: 'none',
    },
  });


class MainMenu extends React.Component {
  state = {
    open:false,
  }
  
  handleToggle = () => {
    this.setState({open:!this.state.open});
  }

  handleClose = event => {
    if (this.target.contains(event.target)) {
      return;
    }

    this.setState({open:false})
  }

  handleLogout = () => {
    logout();
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            {(isLoggedIn()) ?
              (<Manager>
                <Target>
                  <div ref={node => {this.target = node}}>
                    <IconButton
                      className={classes.menuButton}
                      color="inherit"
                      aria-label="Menu"
                      aria-owns={open ? "menu-list-collapse" : null}
                      aria-haspopup="true"
                      onClick={this.handleToggle}
                    >
                      <MenuIcon />
                    </IconButton>
                  </div>
                </Target>
                <Portal>
                  <Popper placement="bottom" eventsEnabled={open} className={classNames({[classes.popperClose]:!open})}>
                      <ClickAwayListener onClickAway={this.handleClose}>
                        <Collapse in={open} id="menu-list-collapse" style={{transformOrigin:'0 0 0'}}>
                          <Paper style={{ margin:3 }}>
                            <MenuList role="menu">
                              <MenuItem onClick={this.handleClose}><Link to="/home" className={classes.menuItem}>Upcoming Training</Link></MenuItem>
                              <MenuItem onClick={this.handleClose}>Training Topics</MenuItem>
                              <MenuItem onClick={this.handleClose}>My Trainings</MenuItem>
                            </MenuList>
                          </Paper>
                        </Collapse>
                      </ClickAwayListener>
                  </Popper>
                </Portal>
              </Manager>):
              (null)
            }
            <LinkButton color="inherit" to="/" className={classes.flex}>
              <Typography variant="title" color="inherit" >
                Training On-Demand
              </Typography>
            </LinkButton>
            {(isLoggedIn()) ?
              (<LinkButton color="inherit" to="/" onClick={this.handleLogout}>Logout</LinkButton>):
              (<LinkButton color="inherit" to="/login">Login</LinkButton>)}
          </Toolbar>
        </AppBar>
      </div>
    );
    }
  }
  
  MainMenu.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MainMenu);
  