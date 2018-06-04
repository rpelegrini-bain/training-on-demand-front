import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import { Paper } from 'material-ui';
import Typography from 'material-ui/Typography';
import LinkButton from './LinkButton';
import { Link, Redirect } from 'react-router-dom';
import { isLoggedIn, login } from '../utils/AuthService';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 20,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 280,
  },
  menu: {
  },
  home: {
    marginTop: 100,
  },
});

function handleLogin() {
  login();
}

class Login extends React.Component {
    state = {
        name: ''
      };

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };

    handleEnter = event => {
      if(event.key === 'Enter') {
        handleLogin();
        this.props.history.push('/home');
      }
    };
    
    render() {
        const { classes } = this.props;

        return (
          <div>
            {(isLoggedIn()) ?
              (<Redirect to="/home"/>):
              (<Grid container spacing={16} justify="center" className={classes.home}>
                <Grid item xs={3}>
                  <Paper className={classes.container} >
                    <Typography variant="headline" component="h3">
                      Login
                    </Typography>
                    <form noValidate autoComplete="off">
                      <TextField
                          id="name"
                          label="Email"
                          className={classes.textField}
                          value={this.state.name}
                          onChange={this.handleChange('name')}
                          margin="normal"
                      />
                      <TextField
                          id="password-input"
                          label="Password"
                          className={classes.textField}
                          type="password"
                          autoComplete="current-password"
                          margin="normal"
                          onKeyPress={this.handleEnter}
                      />
                      <Link to="/recover">Forgot your password?</Link>
                      <Grid container spacing={16}>
                        <Grid item xs={4}>
                          <Link to="/register">Register</Link>
                        </Grid>
                        <Grid item xs={4}></Grid>
                        <Grid item xs={4}>
                          <LinkButton to="/home" onClick={handleLogin}>Next</LinkButton>
                        </Grid>
                      </Grid>
                    </form>
                  </Paper>
                </Grid>
              </Grid>)
            }
          </div>
        );
    }
}

Login.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Login);