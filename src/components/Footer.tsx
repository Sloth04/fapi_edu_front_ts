import React from 'react'
import styled from "styled-components";
import {CustomColumn, CustomLink, CustomLogo} from "./Header";
import {Button, Image} from "react-bootstrap";
import logo from "../assets/logo_white.svg";
import back_icon from "../assets/back_icon.svg";

interface Props {
    width?: string;
    height?: string;
    top?: string;
    justifyContent?: string;
}

const CustomFooter = styled.footer<Props>`
  flex-direction: row;
  width: 84%;
  height: 196px;
  display: flex;
  padding-left: 8%;
  padding-right: 8%;
  background-color: #262626;
  border-top: 1px solid #000000;
  text-align: center;
  justify-content: ${props => props.justifyContent ? props.justifyContent : "center"};
`

const CustomBackButton = styled(Button)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: none;
  border: 1px solid #FFFFFF;
  border-radius: 100px;

  width: 54px;
  height: 54px;
`

export function Footer() {
    return (
        <CustomFooter>
            <CustomColumn width={'10%'} justifyContent={'flex-start'}>
                <CustomLogo height={'100px'} width={'100px'} src={logo}>

                </CustomLogo>
            </CustomColumn>
            <CustomColumn width={'15%'}>
                <CustomLink to={'/'} textColor={'white'}>Книги</CustomLink>
            </CustomColumn>
            <CustomColumn width={'15%'}>
                <CustomLink to={'/about'} textColor={'white'}>Про ресурс</CustomLink>
            </CustomColumn>
            <CustomColumn width={'35%'}>

            </CustomColumn>
            <CustomColumn width={'25%'} justifyContent={'flex-end'}>
                <CustomBackButton>
                    <Image src={back_icon}>
                    </Image>
                </CustomBackButton>
            </CustomColumn>
        </CustomFooter>
    )
}