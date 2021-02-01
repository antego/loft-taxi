import React from "react"; // we need this to make JSX compile

const OrderConfirmationDialog: React.FC<{
  onNewOrder: () => void;
}> = (props) => {
  return (
    <div style={{ background: "orange" }}>
      <h2>Заказ размещен</h2>
      <button onClick={props.onNewOrder}>Сделать новый заказ</button>
    </div>
  );
};

export default OrderConfirmationDialog;
