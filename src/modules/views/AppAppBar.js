import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import AppBar from '../components/AppBar';
import Toolbar, { styles as toolbarStyles } from '../components/Toolbar';
import Typography from "../components/Typography";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const styles = theme => ({
  title: {
    fontSize: 24,
  },
  placeholder: toolbarStyles(theme).root,
  toolbar: {
    justifyContent: 'space-between',
  },
  left: {
    flex: 1,
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
});

function AppAppBar(props) {
  const {classes} = props;
  const [anchorEl, setAnchorEl] = React.useState(null);
  let history = useHistory();

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
    history.push(determineURL(event.target.textContent));
  };

  const determineURL = (stringValue) => {
    switch (stringValue) {
      case "Results":
      case "About":
        return `/${stringValue.toLowerCase()}`;
      default:
        return `/`;
    }
  };


  return (
    <div>
      <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
          <MenuIcon onClick={handleClick}
                    aria-controls="nav-menu" aria-haspopup="true"/>
          <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Home</MenuItem>
            <MenuItem onClick={handleClose}>Results</MenuItem>
            <MenuItem onClick={handleClose}>About</MenuItem>
          </Menu>
          <div className={classes.left} />
          <Typography align="center" variant="h2" marked="center">
            Testing as a Service
          </Typography>
          <div className={classes.right}>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.placeholder} />
    </div>
  );
}

AppAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppAppBar);
