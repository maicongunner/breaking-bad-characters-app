import styled from 'styled-components';

export const Container = styled.div`
  color: #000;
`;

export const BoxCharacterData = styled.div`
  padding: 15px;
  margin: 0;
  display: flex;
  flex-direction: column;

  a {
    width: 110px;
  }

  h3 {
    margin-bottom: 10px;
    span {
      color: rgb(72, 127, 90);
      text-shadow: rgb(0, 0, 0) 1px 1px;
      background: rgb(255, 255, 255);
      font-size: 1.3rem;
      @media (min-width: 767px) {
        font-size: 1.6rem;
      }
    }
  }

  .box-data-character {
    display: flex;
    flex-direction: column;

    figure {
      margin-right: 20px;
      margin-bottom: 20px;
      img {
        border-radius: 2px;
        max-width: 100%;
        max-height: 300px;
      }
    }

    @media (min-width: 767px) {
      flex-direction: row;
      figure {
        max-width: 300px;
        max-height: 100%;
        margin-bottom: 0;
      }
    }
  }
`;
