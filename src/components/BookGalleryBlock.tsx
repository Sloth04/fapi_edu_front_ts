import React from 'react';
import styled from "styled-components";
import {useBooks} from "../hooks/books";
import {Loader} from "./Loader";
import {ErrorMessage} from "./ErrorMessage";
import BooksPagination from "./BooksPagination";

interface Props {
    width?: string;
    height?: string;
    fontFamily?: string;
    fontWeight?: string;
    fontSize?: string;
    maxWidth?: string;
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
  padding-left: 8%;
  padding-right: 5%;
`

export const CustomText = styled.div<Props>`
  font-family: ${props => props.fontFamily ? props.fontFamily : "NunitoRegular, sans-serif"};
  font-style: normal;
  font-weight: ${props => props.fontWeight ? props.fontWeight : "400"};
  font-size: ${props => props.fontSize ? props.fontSize : "22px"};
  line-height: ${props => props.fontSize ? props.fontSize : "22px"};
  color: #0F0701;
  max-width: ${props => props.maxWidth ? props.maxWidth : "none"};
  margin-bottom: 4%;
`

const BookGalleryBlock = () => {
    const {loading, error, books} = useBooks()
    return (
        <CustomBlock>
            <CustomColumn width={'80%'}>
                <CustomText fontFamily={'NunitoBold, sans-serif'} fontSize={'32px'} fontWeight={'600'}>
                    Усі книги
                </CustomText>
                <CustomText>
                    Відсортувати: по даті публікації
                </CustomText>
                {loading && <Loader/>}
                {error && <ErrorMessage error={error}/>}
                <BooksPagination data={books}></BooksPagination>
            </CustomColumn>
            <CustomColumn width={'20%'}>

            </CustomColumn>
        </CustomBlock>
    );
};

export default BookGalleryBlock;