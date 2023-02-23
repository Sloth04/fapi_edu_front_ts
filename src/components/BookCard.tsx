import React, {useState} from "react";
import type {IBook} from "../models";
import styled from "styled-components";
import {Image} from "react-bootstrap";

interface BookProps {
    book: IBook
}

interface BookCardCustomTextProps {
    fontFamily?: string;
    fontWeight?: string;
    fontSize?: string;
    maxWidth?: string;
}

const CustomBookCard = styled.div`
  width: 33%;
  height: 391px;
  display: flex;
  text-align: left;
  flex-direction: column;
  align-items: flex-start;

`
const CustomBookCover = styled(Image)`
  max-width: 240px;
  max-height: 266px;
`

export const BookCardCustomText = styled.div<BookCardCustomTextProps>`
  font-family: ${props => props.fontFamily ? props.fontFamily : "NunitoRegular, sans-serif"};
  font-style: normal;
  font-weight: ${props => props.fontWeight ? props.fontWeight : "400"};
  font-size: ${props => props.fontSize ? props.fontSize : "22px"};
  line-height: ${props => props.fontSize ? props.fontSize : "22px"};
  color: #0F0701;
  max-width: ${props => props.maxWidth ? props.maxWidth : "none"};
  margin-bottom: 2%;
`

export function BookCard({book}: BookProps) {

    return (
        <CustomBookCard>
            <CustomBookCover src={book.cover_file} alt={book.title}/>
            <BookCardCustomText fontFamily={'InterRegular'} fontSize={'20px'}
                                fontWeight={'400'} maxWidth={"240px"}>{book.title}</BookCardCustomText>
            <BookCardCustomText fontFamily={'NunitoRegular'} fontSize={'18px'}
                                fontWeight={'400'} maxWidth={"240px"}>{book.writer}</BookCardCustomText>
        </CustomBookCard>
    )
}

// const [details, setDetails] = useState(false)

// const btnBgClassname = details ? 'bg-blue-400' : 'bg-yellow-400'
// const btnClasses = ['py-2 px-4 border', btnBgClassname]
// <div className="border py-2 px-4 rounded flex flex-co items-center mb-2"
// >
//     <button
//         className={btnClasses.join(' ')}
//         onClick={() => setDetails(prev => !prev)}
//     >
//         {details ? 'Hide Description' : 'Show Description'}
//     </button>
//
//     {details && <div>
//         <p>{book.description}</p>
//     </div>}
// </div>