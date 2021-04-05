import React from 'react'
import styled from '@emotion/styled'
import TextField from '../../../property/input/text-field';
import Selector from '../../../property/input/selector';

function TextFieldnSelector(props : {
  label : string
}) {
  const { label } = props;

  return (
    <Wrapper>
      <label>{label}</label>
      <div className="postion x">
        <TextField placeholder="0°" width={60} />
      </div>
      <div className="selector">
        <Selector />
      </div>
    </Wrapper>
  )
}

export default TextFieldnSelector

const Wrapper = styled.div`
display: flex;
  align-items: center;

  label {
    font-size: 12px;
    color: #fff;
    margin-right: 30px;
  }

  .postion, .selector {
    margin: 0px 4px;
  }
`