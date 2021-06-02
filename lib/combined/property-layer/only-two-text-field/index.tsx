import React from "react";
import styled from "@emotion/styled";
import TextField from "../../../property/input/text-field";
import Icon from "../../../icons";

function OnlyTwoTextField(props: { label: string }) {
  const { label } = props;

  return (
    <Wrapper>
      <label>{label}</label>
      <div className="editor-area">
        <div className="postion x">
          <TextField
            placeholder="0"
            width={60}
            rightIcon={<Icon name="xPostion" />}
          />
        </div>
        <div className="postion y">
          <TextField
            placeholder="0"
            width={60}
            rightIcon={<Icon name="yPostion" width={16} />}
          />
        </div>
      </div>
    </Wrapper>
  );
}

export default OnlyTwoTextField;

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

  .postion {
    margin: 0px 4px;
  }
`;
