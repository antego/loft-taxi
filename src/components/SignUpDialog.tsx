import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React from "react"; // we need this to make JSX compile
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  signUpDialog: {
    height: 400,
    width: 300,
    padding: 40,
  },
});

const SignUpDialog: React.FC<{
  onSignIn: () => void;
  onSignUp: () => void;
}> = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.signUpDialog} elevation={10}>
      <h2>Регистрация</h2>
      <br />
      Email
      <br />
      <TextField label='mail@mail.ru'/>
      <br />
      Как вас зовут
      <br />
      <TextField label='Пётр Александрович' />
      <br />
      Придумайте пароль
      <br />
      <TextField type='password' />
      <br />
      Забыли пароль?
      <br />
      <Button variant='contained' onClick={props.onSignUp}>Зарегистрироваться</Button>
      <br />
      Уже зарегистрированы? <span onClick={props.onSignIn}>Войти</span>
    </Paper>
  );
};

export default SignUpDialog;
