import React from 'react'
import {Link} from "react-router-dom";
import ButtonV1 from "./ButtonV1";
import styled from "styled-components";
import {Button, Image} from "react-bootstrap";
import logo from '../assets/logo_black.svg';
import search from './../assets/search.svg';

interface Props {
    width?: string;
    height?: string;
    top?: string;
    justifyContent?: string;
    textColor?: string;
}

const CustomHeader = styled.header`
  flex-direction: row;
  width: 84%;
  height: 196px;
  display: flex;
  padding-left: 8%;
  padding-right: 8%;
`

export const CustomColumn = styled.div<Props>`
  flex-direction: row;
  width: ${props => props.width ? props.width : "20%"};
  height: 197px;
  display: flex;
  align-items: center;
  justify-content: ${props => props.justifyContent ? props.justifyContent : "center"};
  position: relative;
`

const CustomInputCombo = styled.div<Props>`
  flex-direction: row;
  display: flex;
  position: relative;
  width: 100%;
`

export const CustomLink = styled(Link)<Props>`
  font-family: NunitoMedium, sans-serif;
  font-size: 20px;
  line-height: 20px;
  display: flex;
  color: ${props => props.textColor ? props.textColor : "black"};
  align-items: center;
  text-align: center;
  text-decoration: none;
`

const CustomInput = styled.input<Props>`
  font-family: NunitoRegular, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  padding: 10px;
  width: ${props => props.width ? props.width : "100%"};
  border: none;
  border-radius: 10px;
  height: 38px;
  background: #EFEFEF;
  color: #6C6C6C;
  position: relative;
`

export const CustomImageBox = styled.div`
  height: 100%;
  width: 10%;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(0, -50%);
  background: #FF7900;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const CustomImage = styled(Image)`
  position: relative;
  background: #FF7900;
  border-radius: 10px;
`

export const CustomLogo = styled(Image)`
`

export function Header() {
    return (
        <CustomHeader>
            <CustomColumn width={'10%'} justifyContent={'flex-start'}>
                <CustomLogo height={'100px'} width={'100px'} src={logo}>

                </CustomLogo>
            </CustomColumn>
            <CustomColumn width={'15%'}>
                <CustomLink to={'/'}>Книги</CustomLink>
            </CustomColumn>
            <CustomColumn width={'15%'}>
                <CustomLink to={'/about'}>Про ресурс</CustomLink>
            </CustomColumn>
            <CustomColumn width={'35%'}>
                <CustomInputCombo>
                    <CustomInput placeholder={'Введіть назву книги...'}>
                    </CustomInput>
                    <CustomImageBox>
                        <CustomImage src={search}>

                        </CustomImage>
                    </CustomImageBox>
                </CustomInputCombo>
            </CustomColumn>
            <CustomColumn width={'25%'} justifyContent={'flex-end'}>
                <ButtonV1 color={"#FFFFFF"} background={"#0F0701"}>
                    Увійти
                </ButtonV1>
            </CustomColumn>
        </CustomHeader>
    )
}