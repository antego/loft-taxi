import React from "react"; // we need this to make JSX compile
import SignInDialog from "../components/SignInDialog";

const SignInPage: React.FC<{ onSignIn: () => void; onSignUp: () => void }> = (
  props
) => {
  return <SignInDialog onSignIn={props.onSignIn} onSignUp={props.onSignUp} />;
};

export default SignInPage;
