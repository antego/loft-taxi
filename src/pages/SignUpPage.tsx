import React from "react"; // we need this to make JSX compile
import SignUpDialog from "../components/SignUpDialog";

const SignUpPage: React.FC<{ onSignIn: () => void; onSignUp: () => void }> = (
  props
) => {
  return <SignUpDialog onSignIn={props.onSignIn} onSignUp={props.onSignUp} />;
};

export default SignUpPage;
