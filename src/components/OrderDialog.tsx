import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import React from "react"; // we need this to make JSX compile

const useStyles = makeStyles({
  paper: {
    width: 300,
    height: 300,
    position: 'absolute',
    left: '20px',
    top: '100px',
    padding: 20
  }
});

const OrderDialog: React.FC<{
  onOrder: () => void;
}> = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={10}>
      <div>
        <TextField id="standard-basic" label="Лесная поляна" />
        <TextField id="standard-basic" label="Березовая роща" />
        <br />
        <Button  variant='contained' onClick={props.onOrder}>Заказать</Button>
      </div>
    </Paper>
  );
};

export default OrderDialog;
