import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React from "react"; // we need this to make JSX compile

const useStyles = makeStyles({
  paper: {
    width: 300,
    height: 150,
    position: "absolute",
    left: "20px",
    top: "100px",
    padding: 20,
  },
});

const OrderConfirmationDialog: React.FC<{
  onNewOrder: () => void;
}> = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={10}>
      <h2>Заказ размещен</h2>
      <Button variant='contained' onClick={props.onNewOrder}>Сделать новый заказ</Button>
    </Paper>
  );
};

export default OrderConfirmationDialog;
