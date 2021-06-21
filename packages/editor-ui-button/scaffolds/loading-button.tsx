import React, { ReactChild, useRef, useState, useEffect } from "react";
import Loading from "../loading-indicator/default-loading-indicator";
import styled from "@emotion/styled";

interface LoadingButtonProps {
  children: ReactChild;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (e) => void;
}

export function LoadingButton(props: LoadingButtonProps) {
  const { loading, disabled, onClick } = props;
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const ref = useRef(null);

  useEffect(() => {
    // set w/h
    if (ref.current && ref.current.getBoundingClientRect().width) {
      setWidth(ref.current.getBoundingClientRect().width);
    }
    if (ref.current && ref.current.getBoundingClientRect().height) {
      setHeight(ref.current.getBoundingClientRect().height);
    }

    //
    if (loading) {
      setShowLoader(true);
    }

    // Show loader a bits longer to avoid loading flash
    if (!loading && showLoader) {
      const timeout = setTimeout(() => {
        setShowLoader(false);
      }, 400);

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [loading, showLoader]);

  return (
    <Button
      widht={width}
      height={height}
      ref={ref}
      onClick={onClick}
      disabled={loading ?? disabled}
    >
      {showLoader ? (
        <Loading color="white" loading size="8px" />
      ) : (
        props.children
      )}
    </Button>
  );
}

const Button = styled.button<{
  widht: number;
  height: number;
}>`
  width: ${(p) => (p.widht ? p.widht + "px" : undefined)};
  height: ${(p) => (p.height ? p.height + "px" : undefined)};
  min-height: 24px;
  height: 100%;
  border: none;
  background: black;
  color: white;
  padding: 16px 20px;
  border-radius: 4px;
  font-size: large;
`;
