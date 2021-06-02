import React from "react";
import styled from "@emotion/styled";
import TextField from "../../../property/input/text-field";
import Silder from "../../../property/input/silder";

function TextFieldnSilder(props: { label: string }) {
  const { label } = props;
  return (
    <Wrapper>
      <label>{label}</label>
      <div className="editor-area">
        <div className="postion x">
          <TextField placeholder="0°" width={60} />
        </div>
        <div className="silder">
          <Silder value={60} />
        </div>
      </div>
    </Wrapper>
  );
}

export default TextFieldnSilder;

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
  .silder {
    margin: 0px 4px;
  }
`;
