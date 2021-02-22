import React, { useContext } from "react"; // we need this to make JSX compile
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../modules/auth";

const useStyles = makeStyles({
  signInDialog: {
    height: 300,
    width: 300,
    padding: 40,
  },
});

const SignInDialog: React.FC<{}> = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
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
        <Button variant="contained" component={Link} to="/map" onClick={() => dispatch(login())}>
          Войти
        </Button>
      </form>
      <br />
      Новый пользователь? <Link to="/signup">Регистрация</Link>
    </Paper>
  );
};

export default SignInDialog;
