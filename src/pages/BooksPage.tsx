import React, {useContext} from "react";
import {useBooks} from "../hooks/books";
import {Header} from "../components/Header";
import {WelcomeBlock} from "../components/WelcomeBlock";
import BookGalleryBlock from "../components/BookGalleryBlock";
import {Footer} from "../components/Footer";

export function BooksPage() {
    const {loading, error, books} = useBooks()
    // const {modal, open: openModal, close: closeModal} = useContext(ModalContext)
    //
    // const createHandler = (book: IBook) => {
    //     closeModal()
    // }

    return (
        <>
            <Header/>
            <main>
                <WelcomeBlock></WelcomeBlock>
                <BookGalleryBlock></BookGalleryBlock>
            </main>
            <Footer/>
            {/*<div className="container mx-auto max-2xl pt-5">*/}
            {/*{books.map(book => <BookCard book={book} key={book.id}/>)}*/}

            {/*{modal && <Modal title="Add new book" onClose={closeModal}>*/}
            {/*    <AddBook onCreate={createHandler}/>*/}
            {/*</Modal>}*/}
            {/*<button*/}
            {/*    className="fixed bottom-5 right-5 rounded-full bg-yellow-400 text-2xl px-3 py-2"*/}
            {/*    onClick={openModal}*/}
            {/*>+*/}
            {/*</button>*/}
            {/*</div>*/}
        </>

    )
}