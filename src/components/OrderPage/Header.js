import { AppBar, TextField, Toolbar } from "@material-ui/core";
import { LocationOffOutlined, LocationOnOutlined } from "@material-ui/icons";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
 toolbar:{
   backgroundColor:'#fff'
 }
});

function Header() {
  const classes = useStyles();
    return (
      <div className="Header">
        <h1>OrderPage</h1>
        <AppBar position="static">
          <Toolbar className={classes.toolbar}>
          <LocationOnOutlined style={{
            color:'#000',
            marginRight:'8px'
          }}></LocationOnOutlined>
          <TextField fullWidth placeholder="396/15 Malviya Nagar Ashta" />
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  
  export default Header;
  