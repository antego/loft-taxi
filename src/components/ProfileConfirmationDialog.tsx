import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import React from "react"; // we need this to make JSX compile

const useStyles = makeStyles({
  paper: {
    width: 500,
    height: 300,
    padding: 20,
  },
});

const ProfileConfirmationDialog: React.FC<{
  onReturnToOrder: () => void;
}> = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={10}>
      <h2>Профиль</h2>
      Профиль изменен
      <br />
      <Button variant='contained' onClick={props.onReturnToOrder}>Перейти на карту</Button>
    </Paper>
  );
};

export default ProfileConfirmationDialog;
