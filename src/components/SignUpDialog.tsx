import React from "react"; // we need this to make JSX compile

interface SignUpDialogProps {
  onSignIn: () => void;
}

function SignUpDialog(props: SignUpDialogProps) {
  return (
    <div style={{ background: "orange" }}>
      <h2>Регистрация</h2>
      <br />
      Email
      <br />
      <input></input>
      <br />
      Как вас зовут
      <br />
      <input></input>
      <br />
      Придумайте пароль
      <br />
      <input></input>
      <br />
      Забыли пароль?
      <br />
      <button>Зарегистрироваться</button>
      Уже зарегистрированы? <div onClick={props.onSignIn}>Войти</div>
    </div>
  );
}

export default SignUpDialog;
