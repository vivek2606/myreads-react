import { Link } from "react-router-dom";
import Shelf from "./Shelf";
import Header from "./Header";
import { PlusCircleIcon } from '@heroicons/react/outline';
import PropTypes from 'prop-types'

const Library = ({ appTitle, books, bookShelfUpdate }) => {
    const currentlyReading = books.filter((i) => i.shelf === "currentlyReading");
    const wantToRead = books.filter((i) => i.shelf === "wantToRead");
    const read = books.filter((i) => i.shelf === "read");
    return (
        <div className="flex flex-col">
            <Header appTitle={appTitle} />
            <Shelf title="Currently Reading" books={currentlyReading} bookShelfUpdate={bookShelfUpdate} />
            <Shelf title="Want to Read" books={wantToRead} bookShelfUpdate={bookShelfUpdate} />
            <Shelf title="Read" books={read} bookShelfUpdate={bookShelfUpdate} />

            <Link className="fixed bottom-16 right-8 text-white z-90 drop-shadow-lg hover:drop-shadow-2xl hover:animate-bounce duration-100" to="/search">
                <PlusCircleIcon className="w-16 h-16 rounded-full m-5 bg-indigo-600" />
            </Link>

        </div>

    )
}

export default Library;

Library.propTypes = {
    appTitle: PropTypes.string.isRequired,
    books: PropTypes.array.isRequired,
    bookShelfUpdate: PropTypes.func.isRequired
}