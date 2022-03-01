import styled from "styled-components";

type InputRangeProps = {
  color: string;
};

export const Container = styled.div<InputRangeProps>`
  width: 160px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--${({ color }) => color});
  border-radius: 3px;

  input {
    width: 128px;
    height: 6px;
    margin: 1rem 0.5rem;
    border-radius: 5px;
    background-color: var(--color-range);
  }
`;
