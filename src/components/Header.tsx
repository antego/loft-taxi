import React, { useContext } from "react"; // we need this to make JSX compile
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../modules/auth";

const useStyles = makeStyles({
  appBar: {
    background: "black",
  },
  logo: {
    flexGrow: 1,
  },
});

const Header: React.FC<{}> = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar>
        <div className={classes.logo}>
          LOFT<span style={{ color: "orange" }}>TAXI</span>
        </div>
        <Button color="inherit" component={Link} to="/map">
          Карта
        </Button>
        <Button color="inherit" component={Link} to="/profile">
          Профиль
        </Button>
        <Button color="inherit" onClick={() => dispatch(logout())}>
          Выйти
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
