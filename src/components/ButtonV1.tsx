import React from 'react';
import styled from "styled-components";
import {Button} from "react-bootstrap";

interface Props {
    children: string
    background?: string
    color?: string
}

//
const CustomButton = styled(Button)<Props>`
  color: ${props => props.color ? props.color : "black"};
  box-sizing: border-box;
  font-family: NunitoMedium, sans-serif;
  font-style: normal;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 16.5px 47px;

  border: 1px solid #000000;
  border-radius: 50px;
  background: ${props => props.background ? props.background : "none"};
`

const ButtonV1 = ({children, color, background}: Props) => {
    return (
        <CustomButton background={background} color={color}>
            {children}
        </CustomButton>
    );
};

export default ButtonV1;