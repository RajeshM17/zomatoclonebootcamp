import { AppBar, TextField, Toolbar } from "@material-ui/core";
import { LocationOffOutlined, LocationOnOutlined } from "@material-ui/icons";
import Header from "./components/OrderPage/Header";
import { makeStyles } from '@material-ui/core/styles';
import Chips from "./components/OrderPage/Chips";
import StripeButton from "./components/Stripe";

const useStyles = makeStyles({
 toolbar:{
   backgroundColor:'#fff'
 }
});

function OrderPage() {
  const classes = useStyles();
    return (
      <div className="OrderPage">
        <Header />
        <Chips/> 
        <StripeButton price={100}/>
      </div>
    );
  }
  
  export default OrderPage;
  