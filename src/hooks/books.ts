import {useEffect, useState} from "react";
import {IBook} from "../models";
import axios, {AxiosError} from "axios";

export function useBooks() {
    const [books, setBooks] = useState<IBook[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    function addBook(book: IBook) {
        setBooks(prev => [...prev, book])
    }

    async function fetchBooks(skip: number = 0, limit: number = 9) {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IBook[]>(`http://localhost:8080/books/?skip=${skip}&limit=${limit}`)
            setBooks([...response.data, ...response.data, ...response.data, ...response.data, ...response.data, ...response.data, ...response.data, ...response.data])
            // ...response.data, ...response.data, ...response.data, ...response.data, ...response.data, ...response.data, ...response.data, ...response.data
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchBooks()
    }, [])

    return {books, error, loading, addBook}
}