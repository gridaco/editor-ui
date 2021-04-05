import React, { useRef, useState } from "react";
import styled from "@emotion/styled";
import { calculateChange } from "./calculateChange";
function ColorPicker() {
  const wrapperRef = useRef(null);
  const circleRef = useRef(null);
  const [focused, setFocused] = useState(false);

  const handelMouseDown = (e: React.MouseEvent) => {
    setFocused(true);
  };

  const handelMouseMove = (e: React.MouseEvent) => {
    const { offsetX: x, offsetY: y } = e.nativeEvent;

    if (focused) {
      const { h, s, v, a } = calculateChange(e, {}, wrapperRef.current);

      circleRef.current.style.top = `${-(v * 100) + 100}%`;
      circleRef.current.style.left = `${s * 100}%`;
    }
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    setFocused(false);
  };

  return (
    <Wrapper
      ref={wrapperRef}
      onPointerDown={handelMouseDown}
      onPointerMove={handelMouseMove}
      onPointerUp={handleMouseUp}
    >
      <div className="gradient-wrapper">
        <div className="gradient-set">
          <div className="black-gradient" />
        </div>
      </div>
      <CursorCircle ref={circleRef} />
    </Wrapper>
  );
}

export default ColorPicker;

const Wrapper = styled.div`
  flex: 2;
  position: relative;

  .gradient-wrapper {
    position: absolute;
    inset: 0px;
    display: flex;
    background: rgb(255, 9, 0);

    .gradient-set {
      position: absolute;
      inset: 0px;
      background: linear-gradient(
        to right,
        rgb(255, 255, 255),
        rgba(255, 255, 255, 0)
      );

      .black-gradient {
        background: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0));
        position: absolute;
        inset: 0px;
        flex: 1;
      }
    }
  }
`;

const CursorCircle = styled.div`
  border-radius: 50%;
  position: absolute;
  border: 2px solid #fff;
  width: 14px;
  height: 14px;
  top: 50%;
  left: 50%;
  transform: translate(-7px, -7px);
`;
