import React from "react";
import ModalContainer from "react-modal-promise";

export function ModalContextProvider(props: {
  children: React.ReactNode | React.ReactNode[];
}) {
  return (
    <>
      <ModalContainer />
      {props.children}
    </>
  );
}
