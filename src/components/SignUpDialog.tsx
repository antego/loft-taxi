import React from "react"; // we need this to make JSX compile

const SignUpDialog: React.FC<{
  onSignIn: () => void;
  onSignUp: () => void;
}> = (props) => {
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
      <button onClick={props.onSignUp}>Зарегистрироваться</button>
      <br />
      Уже зарегистрированы? <span onClick={props.onSignIn}>Войти</span>
    </div>
  );
};

export default SignUpDialog;
