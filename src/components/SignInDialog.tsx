import React from "react"; // we need this to make JSX compile
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  signInDialog: {
    height: 300,
    width: 300,
    padding: 40,
  },
});

const SignInDialog: React.FC<{
  onSignUp: () => void;
  onSignIn: () => void;
}> = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.signInDialog} elevation={10}>
      <h2>Войти</h2>
      <form>
        <br />
        Email
        <br />
        <TextField label="mail@mail.ru" />
        <br />
        Password
        <br />
        <TextField type="password" />
        <br />
        Забыли пароль?
        <br />
        <Button variant="contained" onClick={props.onSignIn}>
          Войти
        </Button>
      </form>
      <br />
      Новый пользователь? <span onClick={props.onSignUp}>Регистрация</span>
    </Paper>
  );
};

export default SignInDialog;
