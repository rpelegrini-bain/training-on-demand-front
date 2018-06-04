import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import List, {
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from 'material-ui/List';
import Info from '@material-ui/icons/Info';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';
import { IconButton, Button } from 'material-ui';
import { Paper } from '@material-ui/core';

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxWidth: 752,
  },
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: 20,
    margin: `${theme.spacing.unit * 4}px 0 ${theme.spacing.unit * 2}px`,
  }
});

class TopicList extends React.Component {
  state = {
    secondary: false,
  };

  handleClickOpen = () => {

  }

  render() {
    const { classes } = this.props;
    const { secondary } = this.state;

    return (
      <div>
        <Grid container spacing={40} justify="center">
          <Grid item xs={6}>
            <Typography variant="title" className={classes.title}>
              Training Topics
            </Typography>
            <div className={classes.demo}>
              <List dense={false}>
                  <ListItem>
                    <ListItemText
                      primary="Adv. Modeling"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                    <ListItemSecondaryAction>
                      <IconButton onClick={this.handleClickOpen}>
                        <Info />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <li>
                    <Divider />
                  </li>
                  <ListItem>
                    <ListItemText
                      primary="Alteryx"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                    <ListItemSecondaryAction>
                      <IconButton onClick={this.handleClickOpen}>
                        <Info />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <li>
                    <Divider />
                  </li>
                  <ListItem>
                    <ListItemText
                      primary="Strategic Toolkit"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                    <ListItemSecondaryAction>
                      <IconButton onClick={this.handleClickOpen}>
                        <Info />
                      </IconButton>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <li>
                    <Divider />
                  </li>
              </List>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.container}>
              <Grid container spacing={16} justify="center">
                <Grid item xs={12}>
                  <Typography variant="title" align="center">
                    Adv. Modeling
                  </Typography>
                  <Divider/>
                </Grid>
                <Grid item xs={4}>
                  <Button color="primary">I want to be a trainer!</Button>
                </Grid>
                <Grid item xs={8}>
                  <Button color="primary">I am interested on this topic!</Button>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="title" align="left">
                    Trainers
                  </Typography>
                  <List>
                    <ListItem><ListItemText primary="Luiz Gonzaga"/></ListItem>
                    <ListItem><ListItemText primary="Luiz Gonzaga"/></ListItem>
                    <ListItem><ListItemText primary="Luiz Gonzaga"/></ListItem>
                  </List>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="title" align="left">
                    Interested in Learning
                  </Typography>
                  <List>
                    <ListItem><ListItemText primary="Luiz Gonzaga"/></ListItem>
                    <ListItem><ListItemText primary="Luiz Gonzaga"/></ListItem>
                    <ListItem><ListItemText primary="Luiz Gonzaga"/></ListItem>
                  </List>
                </Grid>
              </Grid>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

TopicList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TopicList);
