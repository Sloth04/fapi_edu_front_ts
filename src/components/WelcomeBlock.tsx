import React from "react";
import styled from "styled-components";
import {Image} from "react-bootstrap";
import ButtonV1 from "./ButtonV1";
import mainImage from '../assets/main_img.png';

interface Props {
    width?: string;
    height?: string;
    alignItems?: string;
    justifyContent?: string;
}

export const CustomBlock = styled.main<Props>`
  flex-direction: row;
  height: ${props => props.height ? props.height : "800px"};
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 8%;
  padding-right: 8%;
`

export const CustomColumn = styled.div<Props>`
  width: ${props => props.width ? props.width : "50%"};
  flex-direction: column;
  display: flex;
  position: relative;
  align-items: ${props => props.alignItems ? props.alignItems : "flex-start"};
  justify-content: ${props => props.justifyContent ? props.alignItems : "flex-start"};
`

const CustomArticle = styled.div<Props>`
  width: 100%;
  font-family: NunitoRegular, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 80px;
  line-height: 80px;
  align-items: center;
  color: #000000;
`


export function WelcomeBlock() {
    return (
        <CustomBlock>
            <CustomColumn>
                <CustomArticle>Читайте книги безкоштовно
                    <ButtonV1 background={'#565656'} color={'white'}>
                        Обрати жанр
                    </ButtonV1>
                </CustomArticle>

            </CustomColumn>
            <CustomColumn alignItems={"flex-end"} justifyContent={'center'}>
                <Image src={mainImage}></Image>
            </CustomColumn>
        </CustomBlock>

    )
}