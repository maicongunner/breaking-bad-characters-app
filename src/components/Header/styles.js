import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  padding: 20px;
  height: 64px;
  box-sizing: border-box;
  background-color: #ffffff;

  img {
    width: 30px;
  }

  a {
    display: flex;
    align-items: baseline;
  }

  h1 {

    color: #000000;
    margin-left: 10px;
    font-size: 1rem;

    @media (min-width: 325px) {
      font-size: 1.2rem;
    }

    @media (min-width: 767px) {
      font-size: 2rem;
    }

    span {
      color: rgb(72, 127, 90);
      text-shadow: rgb(0, 0, 0) 1px 1px;
      background: rgb(255, 255, 255);
    }
  }
`;
