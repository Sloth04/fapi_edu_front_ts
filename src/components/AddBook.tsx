import React, {useState} from 'react'
import axios from "axios";
import {IBook} from "../models";
import {ErrorMessage} from './ErrorMessage'

const bookData: IBook = {
    description: "",
    genres: "",
    publish_date: "",
    rating: 0,
    title: "",
    writer_id: 0,
    book_file: "",
    cover_file: ""
}

interface AddBookProps {
    onCreate: (book: IBook) => void
}

export function AddBook({onCreate}: AddBookProps) {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()
        setError('')

        if (value.trim().length === 0) {
            setError('Please enter valid title.')
            return
        }

        const response = await axios.post<IBook>('', bookData)

        onCreate(response.data)
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    return (
        <form onSubmit={submitHandler}>
            <input type="text"
                   className="border py-2 px-4 mb-2 w-full outline-0"
                   placeholder="Enter book title"
                   value={value}
                   onChange={changeHandler}
            />
            <input type="text"
                   className="border py-2 px-4 mb-2 w-full outline-0"
                   placeholder="Enter book description"
                   value={value}
                   onChange={changeHandler}
            />
            <input type="number"
                   className="border py-2 px-4 mb-2 w-full outline-0"
                   placeholder="Enter book rating"
                   value={value}
                   onChange={changeHandler}
            />

            {error && <ErrorMessage error={error}/>}


            <button type="submit" className="py-2 px-4 border bg-yellow-400 hover:text-white">Create</button>
        </form>
    );
}