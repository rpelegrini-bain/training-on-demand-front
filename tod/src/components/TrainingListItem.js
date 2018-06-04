import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Info from '@material-ui/icons/Info';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import DateRange from '@material-ui/icons/DateRange';
import Schedule from '@material-ui/icons/Schedule';
import LocationOn from '@material-ui/icons/LocationOn';
import { Dialog, DialogTitle, DialogContent, Button, List } from '@material-ui/core';
import { DialogContentText, DialogActions, IconButton, ListItem, ListItemAvatar, ListItemText } from 'material-ui';
import LinkButton from './LinkButton';

const styles = theme => ({
});

class TrainingListItem extends React.Component {
  state = {
    open:false,
  };

  handleClickOpen = () => {
    this.setState({open:true});
  }

  handleClose = () => {
    this.setState({open:false});
  }

  render() {
    
    return (
      <div>
        <IconButton onClick={this.handleClickOpen}>
          <Info />
        </IconButton>
        <Dialog
            fullscreen="false"
            open={this.state.open}
            onClose={this.handleClose}
            aria-labelledby="responsive-dialog-title">
              <DialogTitle id="responsive-dialog-title">Adv. Modelling</DialogTitle>
              <DialogContent>
                <List>
                  <ListItem>
                    <ListItemAvatar>
                      <Avatar>
                        <PersonIcon/>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>{this.props.trainer}</ListItemText>
                  </ListItem>
                  <ListItem>
                  <ListItemAvatar>
                      <Avatar>
                        <DateRange/>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>{this.props.date}</ListItemText>
                  </ListItem>
                  <ListItem>
                  <ListItemAvatar>
                      <Avatar>
                        <Schedule/>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>{this.props.time}</ListItemText>
                  </ListItem>
                  <ListItem>
                  <ListItemAvatar>
                      <Avatar>
                        <LocationOn/>
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>{this.props.location}</ListItemText>
                  </ListItem>
                </List>
                <DialogContentText>
                  {this.props.registered ? "You are registered on this training session. Please be sure to cancel your partipation if you are not able to attend." : "This training session could be interesting for your development, take advantage of this upcoming session!"}
                </DialogContentText>
                <DialogActions>
                  <LinkButton to="/topic" onClick={this.handleClose} color="primary" autoFocus>Details</LinkButton>
                  <Button onClick={this.handleClose} color="primary">{this.props.registered ? "Cancel" : "Register"}</Button>
                </DialogActions>
              </DialogContent>
          </Dialog>
      </div>
    );
  }
}

TrainingListItem.propTypes = {
  trainer: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  registered: PropTypes.bool.isRequired,
};

export default withStyles(styles)(TrainingListItem);
