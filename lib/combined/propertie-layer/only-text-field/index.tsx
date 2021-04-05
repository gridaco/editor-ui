import React from "react";
import styled from "@emotion/styled";
import TextField from "../../../property/input/text-field";
import Icon from "../../../icons";

function OnlyTextField(props: { label: string }) {
  const { label } = props;

  return (
    <Wrapper>
      <label>{label}</label>
      <div className="postion x">
        <TextField
          placeholder="0"
          width={135}
          rightIcon={<Icon name="close" />}
        />
      </div>
    </Wrapper>
  );
}

export default OnlyTextField;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 210px;

  label {
    font-size: 12px;
    color: #fff;
  }

  .postion {
    margin: 0px 4px;
  }
`;
