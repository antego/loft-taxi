import { makeStyles } from "@material-ui/core/styles";
import React from "react"; // we need this to make JSX compile
import Paper from "@material-ui/core/Paper"
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  paper: {
    width: 500,
    height: 300,
    position: "absolute",
    left: "20%",
    top: "30%",
    padding: 20,
  },
});

const ProfileDialog: React.FC<{
  onSave: () => void;
}> = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper} elevation={10}>
      <h2>Профиль</h2>
      <br />
      <Button variant='contained' onClick={props.onSave}>Сохранить</Button>
    </Paper>
  );
};

export default ProfileDialog;
