import React from "react"; // we need this to make JSX compile

const ProfileDialog: React.FC<{
  onSave: () => void;
}> = (props) => {
  return (
    <div style={{ background: "orange" }}>
      <h2>Профиль</h2>
      <br />
      <button onClick={props.onSave}>Сохранить</button>
    </div>
  );
};

export default ProfileDialog;
