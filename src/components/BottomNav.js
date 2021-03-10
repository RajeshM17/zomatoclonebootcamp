import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsRunIcon from '@material-ui/icons/DirectionsRun';
import { useHistory, useLocation } from 'react-router-dom';
const useStyles = makeStyles({
  root: {},
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);
  const history = useHistory();
  return (
    <BottomNavigation
      style={{
        position: 'fixed',
        bottom: '0px',
        left: '0px',
        right: '0px',
      }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        history.push(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        label="Order"
        value="/Order"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        label="Out"
        value="/Out"
        icon={<DirectionsRunIcon />}
      />

      <BottomNavigationAction
        label="Gold"
        value="/Gold"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Search"
        value="/Search"
        icon={<SearchIcon />}
      />
      <BottomNavigationAction
        label="Profile"
        value="/profile"
        icon={<LocationOnIcon />}
      />
    </BottomNavigation>
  );
}
