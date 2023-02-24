import React from 'react';
import styled from "styled-components";
import {CustomText} from "./BookGalleryBlock";
import DropDownGroup from "./GenreDropDownGroup";
import ButtonV1 from "./ButtonV1";
import {Button} from "react-bootstrap";

const CustomBlock = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  justify-items: center;
  align-items: flex-start;
  background: #FFFFFF;
  box-shadow: 4px 4px 30px rgba(38, 20, 4, 0.1);
  border-radius: 25px;
  position: relative;
  width: 80%;
  padding: 40px;
`
const CustomButtonBlock = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`

const CustomButtonEnter = styled(Button)`
  color: #FFFFFF;
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
  padding: 10px;
  gap: 10px;
  margin: 15px;

  background: #FF7900;
  border-radius: 10px;
`

const CustomButtonClear = styled(Button)`
  color: #0F0701;
  box-sizing: border-box;
  font-family: NunitoMedium, sans-serif;
  font-style: normal;
  font-size: 20px;
  font-weight: 500;
  line-height: 20px;

  display: flex;
  align-items: center;
  text-decoration-line: underline;

  /* black */
  border: 0;

  padding: 10px;
  gap: 10px;
  margin: 15px;
  

  background: #FFFFFF;
`

const SearchCard = () => {
    return (
        <CustomBlock>
            <CustomText fontFamily={'NunitoRegular'} fontWeight={"600"} fontSize={"32px"}
                        style={{padding: "40px", paddingBottom: "15px"}}> Фільтр</CustomText>
            <DropDownGroup></DropDownGroup>
            <CustomButtonBlock>
                <CustomButtonEnter background={''} color={''}>
                    Прийняти
                </CustomButtonEnter>
                <CustomButtonClear>
                    Очистити вибір
                </CustomButtonClear>
            </CustomButtonBlock>
        </CustomBlock>
    );
};

export default SearchCard;