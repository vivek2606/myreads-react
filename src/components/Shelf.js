import Book from './Book'
import PropTypes from 'prop-types'

const Shelf = ({ books, title, bookShelfUpdate }) => {
    return (
        <div className="divide-y divide-solid">
            <div className="text-xl m-3 p-5 font-semibold" >{title}</div >
            <div className="p-5">
                <ol className="flex flex-wrap md:justify-start justify-center">
                    {books.map(item => (
                        <li key={item.id} className="basis-1/2">
                            <Book book={item} bookShelfUpdate={bookShelfUpdate} />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )

}
export default Shelf;
Shelf.propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string,
    bookShelfUpdate: PropTypes.func.isRequired
}