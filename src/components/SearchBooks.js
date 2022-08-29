import { useState } from "react";
import useBooks from "../useBooks";
import { Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import Book from "./Book";
import PropTypes from 'prop-types'

const SearchBooks = ({ books, bookShelfUpdate }) => {
    const [query, setQuery] = useState("")
    const [searchResults] = useBooks(query)
    const handleChange = (event) => {
        setQuery(event.target.value.toLowerCase().trim())
    };

    const searchResultWithShelf = searchResults.map(result => {
        books.map(book => {
            if (result.id === book.id) {
                result.shelf = book.shelf;
            }
            return book;
        })
        return result;
    })
    return (
        <div>
            <div className="p-5 m-8 relative">
                <Link to="/" className="p-10">
                    <ArrowLeftIcon className="w-10 h-10 top-11 absolute rounded-sm bg-gray-400 hover:bg-indigo-600 text-white p-2" />
                </Link>
                <input id="search"
                    className="w-full h-10 mx-8 rounded-sm border-1 hover:border-2 cursor-text drop-shadow-2xl"
                    type="text"
                    onChange={handleChange}
                    onBlur={handleChange}
                    placeholder="Search Books by Title or Author" />
            </div>
            <div className="p-5">
                <ol className="flex flex-wrap md:justify-start justify-center">
                    {searchResultWithShelf.map(item => (
                        <li key={item.id} className="basis-1/2">
                            <Book key={item.id} book={item} bookShelfUpdate={bookShelfUpdate} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>


    )
}
export default SearchBooks;

SearchBooks.propTypes = {
    books: PropTypes.array.isRequired,
    bookShelfUpdate: PropTypes.func.isRequired
}