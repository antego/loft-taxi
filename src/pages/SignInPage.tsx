import { makeStyles } from "@material-ui/core/styles";
import React from "react"; // we need this to make JSX compile
import SignInDialog from "../components/SignInDialog";

const useStyles = makeStyles({
  wrapper: {
    width: "100%",
    height: "100vh",
    display: "flex",
  },
  leftColumn: {
    background: "#000",
    width: "30%",
    height: "100%",
  },
  rightColumn: {
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
  },
});

const SignInPage: React.FC<{ onSignIn: () => void; onSignUp: () => void }> = (
  props
) => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.leftColumn}></div>
      <div className={classes.rightColumn}>
        <SignInDialog onSignIn={props.onSignIn} onSignUp={props.onSignUp} />
      </div>
    </div>
  );
};

export default SignInPage;
