import styled from "styled-components";

export const Header = styled.h1`
    font-size: 60px;
    height: 250px;
    margin: -160px;
    padding: 0px;
    text-align: center;
`;

export const Fieldset = styled.fieldset`
    background: beige;
    border: 1px solid;
    border-radius: 10px;
    font-size: 16px;
    margin-top: 5px;
    text-align: center;
`;

export const Legend = styled.legend`
    font-size: 36px;
    text-align: center;
`;

export const LabelText = styled.span`
    width: 100%;
    max-width: 200px;
    margin-right: 25px;
    font-size: 24px;
    padding: 10px 30px;
`;

export const Field = styled.input`
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
    max-width: 400px;
    width: 100%;
`;

export const Button = styled.button`
    background: rgba(194, 139, 107);
    border: 1px solid black;
    border-radius: 10px;
    text-align: center;
    padding: 10px 30px;
    cursor: pointer;
`;

export const Container = styled.label`
    max-width: 500px;
    margin: 10px;
    padding: 10 40px;
`;

export const Loading = styled.p`
  color: ${({ theme }) => theme.color.teal};
  height: 250px;
  padding: 70px;
  text-align: center;
  font-size: 30px;
`;

export const Failure = styled.p`
  color: ${({ theme }) => theme.color.crimson};
  height: 250px;
  padding: 70px;
  text-align: center;
  font-size: 30px;
`;
