import React from 'react';
import styled from "styled-components";
import {useBooks} from "../hooks/books";
import {Loader} from "./Loader";
import {ErrorMessage} from "./ErrorMessage";
import BooksPagination from "./BooksPagination";
import SearchCard from "./SearchCard";
import SortDropDownGroup from "./SortDropDownGroup";

interface Props {
    width?: string;
    height?: string;
    fontFamily?: string;
    fontWeight?: string;
    fontSize?: string;
    maxWidth?: string;
    paddingLeft?: string;
    paddingRight?: string;
}

const CustomBlock = styled.main<Props>`
  flex-direction: row;
  width: 100%;
  min-height: ${props => props.height ? props.height : "300px"};
  display: flex;
`


const CustomColumn = styled.div<Props>`
  width: ${props => props.width ? props.width : "50%"};
  flex-direction: column;
  display: flex;
  align-items: flex-start;
  padding-left: ${props => props.paddingLeft ? props.paddingLeft : "8%"};
  padding-right: ${props => props.paddingRight ? props.paddingRight : "8%"};
  position: relative;
`

export const CustomText = styled.div<Props>`
  font-family: ${props => props.fontFamily ? props.fontFamily : "NunitoRegular, sans-serif"};
  font-style: normal;
  font-weight: ${props => props.fontWeight ? props.fontWeight : "400"};
  font-size: ${props => props.fontSize ? props.fontSize : "22px"};
  line-height: ${props => props.fontSize ? props.fontSize : "22px"};
  color: #0F0701;
  max-width: ${props => props.maxWidth ? props.maxWidth : "none"};
  margin-bottom: 20px;
`

const BookGalleryBlock = () => {
    const {loading, error, books} = useBooks()
    return (
        <CustomBlock>
            <CustomColumn width={'57%'} paddingRight={"0%"}>
                <CustomText fontFamily={'NunitoBold, sans-serif'} fontSize={'32px'} fontWeight={'600'}
                            style={{padding: "15px"}}>
                    Усі книги
                </CustomText>
                <CustomText style={{alignItems: "center", flexDirection: "row", display: "flex", paddingLeft: "15px"}}>
                    Відсортувати: <SortDropDownGroup/>
                </CustomText>
                {loading && <Loader/>}
                {error && <ErrorMessage error={error}/>}
                <BooksPagination data={books}></BooksPagination>
            </CustomColumn>
            <CustomColumn width={'37%'} paddingLeft={"10%"}>
                <SearchCard/>
            </CustomColumn>
        </CustomBlock>
    );
};

export default BookGalleryBlock;