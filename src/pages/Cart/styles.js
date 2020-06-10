import styled from 'styled-components';
import {darken} from 'polished';

export const Container = styled.div`
  padding: 30px;
  background: #FFF;
  border-radius: 4px;

  footer {
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      background: #7159c1;
      color: #FFF;
      padding: 10px;
      border: 0;
      border-radius: 4px;
      text-transform: uppercase;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.1, '#7159c1')};
      }
    }


  }

`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    border-bottom: 1px solid #eee;
  }

  img {
    height: 100px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: 700;
  }

  div {
    display: flex;
    align-items: center;

    input {
      border: 1px solid #DDD;
      border-radius: 4px;
      color: #666;
      padding: 6px;
      width: 40px;
    }
  }

  button {
    background: none;
    border: 0;
    padding: 6px;

    transition: opacity 0.2s;

      &:hover {
        opacity: 0.6;
      }
  }
`;

export const Total = styled.div`
  display: flex;
  span {
    color: #999;
    font-weight: 700;
  }

  strong {
    font-size: 25px;
    margin-left: 5px;
  }
`;
