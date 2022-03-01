import styled from "styled-components";

type ResultColorProps = {
  red: number;
  green: number;
  blue: number;
};

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media (min-width: 768px) {
    height: 100vh;
  }
  @media (max-width: 768px) {
    max-width: 714px;
  }
`;

export const Content = styled.div`
  margin: 2rem;
  @media (min-width: 768px) {
    width: 714px;
  }
  @media (max-width: 768px) {
    max-width: 714px;
  }
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
    @media (min-width: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
    @media (max-width: 768px) {
      grid-template-columns: repeat(1, 1fr);
    }
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
