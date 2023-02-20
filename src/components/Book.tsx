import React, {useState} from "react";
import type {IBook} from "../models";

interface BookProps {
    book: IBook
}

export function Book({book}: BookProps) {
    const [details, setDetails] = useState(false)

    const btnBgClassname = details ? 'bg-blue-400' : 'bg-yellow-400'
    const btnClasses = ['py-2 px-4 border', btnBgClassname]
    return (
        <div className="border py-2 px-4 rounded flex flex-co items-center mb-2"
        >
            <img src={book.cover_file} className="w-1/6 align-middle" alt={book.title}/>
            <p className="align-top-center">{book.title}</p>
            <button
                className={btnClasses.join(' ')}
                onClick={() => setDetails(prev => !prev)}
            >
                {details ? 'Hide Description' : 'Show Description'}
            </button>

            {details && <div>
                <p>{book.description}</p>
            </div>}
        </div>
    )
}