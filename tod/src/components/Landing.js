import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

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

class Landing extends React.Component {
    
    render() {
        const { classes } = this.props;

        return (
          <Grid container spacing={16} justify="center" className={classes.home}> 
            <Grid item xs={6}>
              <Paper className={classes.root} elevation={4}>
                <Typography variant="headline" component="h3">
                  Welcome to Training On-Demand.
                </Typography>
                <Typography component="p">
                Nulla et porta nunc. Curabitur tincidunt auctor mattis. Donec rhoncus justo accumsan consequat elementum. Morbi dictum feugiat velit ac molestie. Vivamus vehicula fringilla pellentesque. Praesent convallis sollicitudin diam nec ornare. Aenean malesuada egestas sem, et dignissim ex vehicula id. Nullam blandit vehicula elementum. 
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        );
    }
}

Landing.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Landing);