import React from "react";
import styled from "@emotion/styled";
import Toggle from "../../../property/input/toggle";

function OnlyToggle(props: {
  label: string;
  leftItem: React.ReactNode;
  rightItem: React.ReactNode;
}) {
  const { label, leftItem, rightItem } = props;

  return (
    <Wrapper>
      <label>{label}</label>
      <Toggle rightItem={rightItem} leftItem={leftItem} />
    </Wrapper>
  );
}

export default OnlyToggle;

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
