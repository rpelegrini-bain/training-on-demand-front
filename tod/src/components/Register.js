import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { Paper, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core';
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

class Register extends React.Component {
    state = {
        name: '',
        open: false,
    };

    handleRegister = () => {
      this.setState({open:true});
    }

    handleClose = () => {
      this.setState({open:false});
      this.props.history.push('/');
    }

    handleEnter = event => {
      if(event.key === 'Enter') {
        this.handleRegister();
        event.preventDefault();
      }
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
                          onKeyPress={this.handleEnter}
                          margin="normal"
                      />
                      <Grid container spacing="12">
                        <Grid item xs="4"></Grid>
                        <Grid item xs="4"></Grid>
                        <Grid item xs="4">
                          <Button onClick={this.handleRegister}>Next</Button>
                        </Grid>
                      </Grid>
                    </form>
                  </Paper>
                </Grid>
                <Dialog
                  fullscreen="false"
                  open={this.state.open}
                  onClose={this.handleClose}
                  aria-labelledby="responsive-dialog-title">
                  <DialogTitle>Welcome!</DialogTitle>
                  <DialogContent>
                    <DialogContentText>An email confirmation has been sent to {this.state.name}!</DialogContentText>
                    <DialogActions>
                      <LinkButton to="/" onClick={this.handleClose} color="primary">OK</LinkButton>
                    </DialogActions>
                  </DialogContent>
                </Dialog>
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