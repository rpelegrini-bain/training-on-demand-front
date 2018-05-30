import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
  home: {
    marginTop: 100,
  },
});

class NotFound extends React.Component {
    
    render() {
        const { classes } = this.props;

        return (
          <Grid container spacing="12" justify="center" className={classes.home}> 
            <Grid item xs="6">
              <Paper className={classes.root} elevation={4}>
                <Typography variant="headline" component="h3">
                  404 - The droids you are looking for are not here.
                </Typography>
                <Typography component="p">
                The page you are looking does not exist or is out of reach, please check if the path you typed is correct. 
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        );
    }
}

NotFound.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(NotFound);