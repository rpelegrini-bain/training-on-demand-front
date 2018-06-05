import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import LinkButton from './LinkButton';
import { Redirect } from 'react-router-dom';
import { isLoggedIn } from '../utils/AuthService';

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

function handleRegister() {
  //
}

class Register extends React.Component {
    state = {
        name: ''
      };

    handleChange = name => event => {
        this.setState({
          [name]: event.target.value,
        });
      };
    
    render() {
        const { classes } = this.props;

        return (
          <div>
            {(isLoggedIn()) ?
              (<Redirect to="/home"/>):
              (<Grid container spacing="12" justify="center" className={classes.home}>
                <Grid item xs="3">
                  <Paper className={classes.container} >
                    <Typography variant="headline" component="h3">
                      Registration
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
                      <Grid container spacing="12">
                        <Grid item xs="4"></Grid>
                        <Grid item xs="4"></Grid>
                        <Grid item xs="4">
                          <LinkButton to="/" onClick={handleRegister}>Next</LinkButton>
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

Register.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Register);