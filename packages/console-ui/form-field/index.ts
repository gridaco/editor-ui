import { styled } from "linaria/react";

export const FormFieldLabel = styled.span`
  color: black;
  text-overflow: ellipsis;
  font-size: 12px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  align-self: stretch;
  flex-shrink: 0;
`;

export const FormFieldBase = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
  box-sizing: border-box;
  flex-shrink: 0;
`;

export const FormFieldAssisiveText = styled.span`
  color: rgba(0, 0, 0, 0.6);
  text-overflow: ellipsis;
  font-size: 12px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-align: left;
  align-self: stretch;
  flex-shrink: 0;
`;
