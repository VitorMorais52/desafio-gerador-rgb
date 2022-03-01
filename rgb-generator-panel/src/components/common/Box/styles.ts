import styled from "styled-components";

type BoxProps = {
  align?: string;
  marginBottom?: string;
};

export const Container = styled.div<BoxProps>`
  display: flex;
  flex-direction: column;
  align-items: ${({ align }) => (align ? align : "center")};

  padding: 2rem;
  margin-bottom: ${({ marginBottom }) => (marginBottom ? marginBottom : 0)};

  border-radius: 3px;
  background-color: var(--bg-component);
`;
