import React, {useContext} from "react";
import {useBooks} from "../hooks/books";
import {ModalContext} from "../context/ModalContext";
import {IBook} from "../models";
import {Loader} from "../components/Loader";
import {ErrorMessage} from "../components/ErrorMessage";
import {Book} from "../components/Book";
import {Modal} from "../components/Modal";
import {AddBook} from "../components/AddBook";

export  function BooksPage() {
    const {loading, error, books} = useBooks()
    const {modal, open: openModal, close: closeModal} = useContext(ModalContext)

    const createHandler = (book: IBook) => {
        closeModal()
    }

    return (
        <div className="container mx-auto max-2xl pt-5">
            {loading && <Loader/>}
            {error && <ErrorMessage error={error}/>}
            {books.map(book => <Book book={book} key={book.id}/>)}

            {modal && <Modal title="Add new book" onClose={closeModal}>
                <AddBook onCreate={createHandler}/>
            </Modal>}
            <button
                className="fixed bottom-5 right-5 rounded-full bg-yellow-400 text-2xl px-3 py-2"
                onClick={openModal}
            >+
            </button>
        </div>
    )
}