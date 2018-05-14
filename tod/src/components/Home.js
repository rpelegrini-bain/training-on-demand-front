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

class Home extends React.Component {
    
    render() {
        const { classes } = this.props;

        return (
          <Grid container spacing="12" justify="center" className={classes.home}> 
            <Grid item xs="6">
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

Home.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Home);