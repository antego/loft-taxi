import React from "react"; // we need this to make JSX compile

const OrderDialog: React.FC<{
  onOrder: () => void;
}> = (props) => {
  return (
    <div style={{ background: "orange" }}>
      Лесная поляна
      <br />
      Березовая роща
      <br />
      <button onClick={props.onOrder}>Заказать</button>
    </div>
  );
};

export default OrderDialog;
