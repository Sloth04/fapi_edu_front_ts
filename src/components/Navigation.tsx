import React from 'react'
import {Link} from "react-router-dom";
import ButtonV1 from "./ButtonV1";

export function Navigation() {
    return (
        <nav className="h-[50px] flex justify-between px-5 bg-gray-500 text-white items-center">
            <span className="font-bold"> BWT Library</span>
            <ButtonV1>
                Увійти
            </ButtonV1>
            <span>
                <Link to="/" className="mr-2">Books</Link>
                <Link to="/about" className="mr-2">About BWT Library</Link>
            </span>
        </nav>
    )
}