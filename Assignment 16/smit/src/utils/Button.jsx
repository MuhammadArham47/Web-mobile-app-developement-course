import React from "react";
import { Button } from "antd";

function Buttons(props) {
  return (
      <Button type={props.type} size={props.size}>
        {props.value}
      </Button>
  );
}

export default Buttons;
