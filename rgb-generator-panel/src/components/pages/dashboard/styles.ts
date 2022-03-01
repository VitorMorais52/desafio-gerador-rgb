import styled from "styled-components";

type ResultColorProps = {
  red: number;
  green: number;
  blue: number;
};

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const Content = styled.div`
  width: 714px;
  color: white;
  font-size: 18px;

  h1 {
    font-size: 58px;
    margin-bottom: 1rem;
  }

  img {
    margin-right: 0.5rem;
  }

  .colors {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
    justify-content: space-between;
    margin: 0 2rem;
  }
`;

export const ResultColor = styled.div<ResultColorProps>`
  width: 226px;
  height: 226px;
  margin: 2rem 0;
  border-radius: 50%;
  background-color: ${({ red, green, blue }) =>
    `rgba(${red}, ${green}, ${blue})`};
`;
