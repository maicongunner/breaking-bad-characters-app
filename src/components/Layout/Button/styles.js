import styled from 'styled-components';

export const ButtonStyle = styled.button`

    padding: 5px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(72,127,90);;
    width: 110px;
    transition: all 0.3s ease;
    margin-bottom: 40px;
    cursor: pointer;

    span {
      margin-left: 5px;
      font-size: 12px;
      color: rgb(72,127,90);;
      font-weight: bold;
    }

    &:hover {
      background-color: rgb(72,127,90);;

      span {
        color: #ffffff;
      }

      svg {
        fill: #ffffff;
      }
    }

`;
