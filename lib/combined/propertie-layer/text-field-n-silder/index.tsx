import React from "react";
import styled from "@emotion/styled";
import TextField from "../../../property/input/text-field";
import Silder from "../../../property/input/silder";

function TextFieldnSilder(props : {
  label : string
}) {
  const { label } = props;
  return (
    <Wrapper>
      <span>{label}</span>
      <div className="postion x">
        <TextField placeholder="0°" width={60} />
      </div>
      <div className="silder">
        <Silder width={60} />
      </div>
    </Wrapper>
  );
}

export default TextFieldnSilder;

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  span {
    font-size: 12px;
    color: #fff;
    margin-right: 30px;
  }

  .postion {
    margin: 0px 4px;
  }
`;
