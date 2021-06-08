import React from "react";
import styled from "@emotion/styled";
import TextField from "../../../property/input/text-field";
import Selector from "../../../property/input/selector";

function TextFieldnSelector(props: { label: string }) {
  const { label } = props;

  return (
    <Wrapper>
      <label>{label}</label>
      <div className="editor-area">
        <div className="postion x">
          <TextField placeholder="0°" width={60} />
        </div>
        <div className="selector">
          <Selector />
        </div>
      </div>
    </Wrapper>
  );
}

export default TextFieldnSelector;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 210px;

  label {
    font-size: 12px;
    color: #fff;
  }

  .editor-area {
    display: flex;
    align-items: center;
  }

  .postion,
  .selector {
    margin: 0px 4px;
  }
`;
