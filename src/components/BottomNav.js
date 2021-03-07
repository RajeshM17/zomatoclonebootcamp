import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {useHistory,useLocation} from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const location=useLocation()
  const [value, setValue] = React.useState(location.pathname);
  const history=useHistory();
 ;

  return (
    <BottomNavigation
    style={{
        position:"fixed",
        bottom:"0px",

    }}
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
        history.push(value);
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
        label="Gold"
        value="/Gold"
        icon={<FavoriteIcon />}
      />
      <BottomNavigationAction
        label="Profile"
        value="/profile"
        icon={<LocationOnIcon />}
      />
    </BottomNavigation>
  );
}
