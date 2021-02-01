import React from "react"; // we need this to make JSX compile

const Header: React.FC<{
  onOrder: () => void;
  onSignOut: () => void;
  onProfile: () => void;
}> = (props) => {
  return (
    <div style={{ color: "white", background: "black" }}>
      <h2>
        LOFT<span style={{ color: "orange" }}>TAXI</span>
      </h2>
      <div onClick={props.onOrder}>Карта</div>
      <div onClick={props.onProfile}>Профиль</div>
      <div onClick={props.onSignOut}>Выйти</div>
    </div>
  );
};

export default Header;
