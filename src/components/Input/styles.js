import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #2d2d2d;
  padding: 10px 12px;
  border-radius: 8px;
`;

export const IconContainer = styled.div`
  margin-right: 10px;
  color: #ffffff;
  font-size: 20px;
`;

export const InputText = styled.input`
  background: transparent;
  flex: 1;
  border: none;
  outline: none;
  color: #ffffff;
  font-size: 16px;

  &::placeholder {
    color: #aaa;
  }
`;
