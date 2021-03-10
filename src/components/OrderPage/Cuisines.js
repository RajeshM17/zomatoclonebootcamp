import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory, useLocation } from 'react-router-dom';
import { Avatar, Box, Button ,Collapse} from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    padding: '10px',
  },
  avatar: {
    padding: '10px',
  },
});



export default function SimpleBottomNavigation() {
  const arr = new Array(15);
  arr.fill(0);
  const classes = useStyles();
  //   const [value, setValue] = React.useState(location.pathname);
  const [less, setLess] = useState(true);
  return (
      <div>
    <Box
      className={classes.root}
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
    >
      {arr.slice(0, 6).map((item, idx) => {
        return (
          <Avatar className={classes.avatar} key={idx} src="/logo192.png" />
        );
      })}
  
    </Box>
    <Collapse in={!less}>
    <Box
      className={classes.root}
      display="flex"
      flexDirection="row"
      flexWrap="wrap"
      justifyContent="center"
    >
      {arr.slice(less,arr.length).map((item, idx) => {
        return (
          <Avatar className={classes.avatar} key={idx} src="/logo192.png" />
        );
      })}
  
    </Box>
         </Collapse>
         <Button onClick={()=>{
             setLess(!less)
         }}>Show more</Button>
    </div>
  );
}
