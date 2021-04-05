import React from "react";
import styled from "@emotion/styled";
import TextField from "../../../property/input/text-field";
import Icon from "../../../icons";

function CombinedPostion() {
  return (
    <Wrapper>
      <span>Postion</span>
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
    </Wrapper>
  );
}

export default CombinedPostion;

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
