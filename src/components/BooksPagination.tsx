import React, {useEffect, useState} from 'react';
import ReactPaginate from 'react-paginate';
import {BookCard} from "./BookCard";
import {IBook} from "../models";
import styled from "styled-components";

const CustomBookContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`

const CustomReactPaginateContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

const CustomReactPagination = styled(ReactPaginate).attrs({
    activeClassName: 'active',
})`
  font-family: Nunito, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 18px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  list-style-type: none;

  li a {
    border-radius: 7px;
    cursor: pointer;
    padding: 10px;
    gap: 10px;
    max-width: 14px;
    max-height: 30px;
  }

  li.previous a,
  li.next a,
  li.break a {
    padding: 10px;
    gap: 10px;

    background: #EFEFEF;
    border-radius: 10px;
  }

  li.active a {
    background: rgba(255, 121, 0, 0.1);
    border-radius: 10px;

    color: #0F0701;
    max-width: 14px;
    max-height: 30px;
  }

  li.disabled a {
    color: #828282;
  }

  li.disable,
  li.disabled a {
  }
`;

export default function BooksPagination(BookProps: { data: any; }) {
    const {data} = BookProps;
    const [currentItems, setCurrentItems] = useState<IBook[]>()
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 9

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems((data.slice(itemOffset, endOffset)));
        setPageCount((Math.ceil(data.length / itemsPerPage)));
    }, [itemOffset, itemsPerPage, data]);

    const handlePageClick = (event: { selected: number; }) => {
        const newOffset = (event.selected + itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };

    console.log('Got data', data)
    if (data.length === 0) {
        return (<div>
            Oops, something happened - library is empty
        </div>);
    }
    return (
        <>
            <CustomBookContainer>
                {currentItems && currentItems.map((book) => {
                    return (
                        <BookCard book={book} key={book.id}/>
                    );
                })}
            </CustomBookContainer>
            <CustomReactPaginateContainer>
                <CustomReactPagination
                    breakLabel="..."
                    nextLabel=">"
                    previousLabel="<"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    pageCount={pageCount}
                    containerClassName="pagination"
                    pageLinkClassName="page-num"
                    previousLinkClassName="page-num"
                    nextLinkClassName="page-num"
                    activeClassName="active"
                    activeLinkClassName="page-num"
                    marginPagesDisplayed={2}
                />
            </CustomReactPaginateContainer>
        </>
    );
}