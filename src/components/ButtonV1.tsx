import React from 'react';
import styled from "styled-components";

interface ButtonV1Props {
    children: string
}

const ButtonV1style = styled.button`
  font-family: 'Nunito';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 27px;
  display: flex;
  color: black;
  padding: 47px 16.5px;
`

const ButtonV1 = ({children}: ButtonV1Props) => {
    return (
        <ButtonV1style>
            {children}
        </ButtonV1style>
    );
};

export default ButtonV1;