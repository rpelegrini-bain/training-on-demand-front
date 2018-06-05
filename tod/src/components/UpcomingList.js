import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Schedule from '@material-ui/icons/Schedule';
import Divider from '@material-ui/core/Divider';
import TrainingListItem from './TrainingListItem';

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
});

class UpcomingList extends React.Component {
  state = {
    secondary: false,
  };

  render() {
    const { classes } = this.props;
    const { secondary } = this.state;

    return (
      <div>
        <Grid container spacing={40} justify="center">
          <Grid item xs={6}>
            <Typography variant="title" className={classes.title}>
              Upcoming Training Sessions
            </Typography>
            <div className={classes.demo}>
              <List dense={false}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <Schedule/>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Adv. Modeling"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                    <ListItemSecondaryAction>
                      <TrainingListItem
                        trainer="Luiz Gonzaga"
                        date="10/01/2010"
                        time="11h"
                        location="Sala Itupeva"
                        registered={false}/>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <li>
                    <Divider inset />
                  </li>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <Schedule />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Alteryx"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                    <ListItemSecondaryAction>
                      <TrainingListItem
                        trainer="Luiz Gonzaga"
                        date="10/01/2010"
                        time="11h"
                        location="Sala Itupeva"
                        registered={false}/>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <li>
                    <Divider inset />
                  </li>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <Schedule />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Strategic Toolkit"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                    <ListItemSecondaryAction>
                      <TrainingListItem
                        trainer="Jonas Romão"
                        date="10/01/2016"
                        time="13h"
                        location="Sala Azca"
                        registered={false}/>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <li>
                    <Divider inset />
                  </li>
              </List>
            </div>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="title" className={classes.title}>
              Your Training Sessions
            </Typography>
            <div className={classes.demo}>
              <List dense={false}>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <Schedule />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Adv. Modeling"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                    <ListItemSecondaryAction>
                      <TrainingListItem
                        trainer="Guilherme Oliveira"
                        date="10/02/2019"
                        time="8h"
                        location="Sala Guajuvira"
                        registered={true}/>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <li>
                    <Divider inset />
                  </li>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <Schedule />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Alteryx"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                    <ListItemSecondaryAction>
                      <TrainingListItem
                        trainer="Luiz Gonzaga"
                        date="10/01/2010"
                        time="11h"
                        location="Sala Itupeva"
                        registered={true}/>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <li>
                    <Divider inset />
                  </li>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <Schedule />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary="Strategic Toolkit"
                      secondary={secondary ? 'Secondary text' : null}
                    />
                    <ListItemSecondaryAction>
                      <TrainingListItem
                        trainer="Luiz Gonzaga"
                        date="10/01/2010"
                        time="11h"
                        location="Sala Itupeva"
                        registered={true}/>
                    </ListItemSecondaryAction>
                  </ListItem>
                  <li>
                    <Divider inset />
                  </li>
              </List>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

UpcomingList.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UpcomingList);
