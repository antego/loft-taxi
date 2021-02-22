import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import React, { useContext } from "react"; // we need this to make JSX compile
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../modules/auth";

const useStyles = makeStyles({
  signUpDialog: {
    height: 400,
    width: 300,
    padding: 40,
  },
});

const SignUpDialog: React.FC<{}> = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  return (
    <Paper className={classes.signUpDialog} elevation={10}>
      <h2>Регистрация</h2>
      <br />
      Email
      <br />
      <TextField label="mail@mail.ru" />
      <br />
      Как вас зовут
      <br />
      <TextField label="Пётр Александрович" />
      <br />
      Придумайте пароль
      <br />
      <TextField type="password" />
      <br />
      Забыли пароль?
      <br />
      <Button
        variant="contained"
        component={Link}
        to="/map"
        onClick={() => dispatch(login())}
      >
        Зарегистрироваться
      </Button>
      <br />
      Уже зарегистрированы? <Link to="/">Войти</Link>
    </Paper>
  );
};

export default SignUpDialog;
