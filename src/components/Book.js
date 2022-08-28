import { CardComponent } from './Card'

const Book = ({ book, bookShelfUpdate }) => {
    // const shelves = [
    //     {
    //         id: '1',
    //         shelfName: 'CurrentlyReading',
    //         shelfDisplayName: 'Currently Reading'
    //     },
    //     {
    //         id: '2',
    //         shelfName: 'wantToRead',
    //         shelfDisplayName: 'Want To Read'
    //     },
    //     {
    //         id: '3',
    //         shelfName: 'read',
    //         shelfDisplayName: 'Read'
    //     },
    //     {
    //         id: '4',
    //         shelfName: 'none',
    //         shelfDisplayName: 'None'
    //     }]
    return (
        <CardComponent
            image={book.imageLinks && book.imageLinks.smallThumbnail}
            defaultValue={book.shelf ? book.shelf : 'none'}
            onChange={(e) => bookShelfUpdate(book, e.target.value)}
            titleText={book.title}
            authorNames={book.authors && book.authors.join(', ')}
        />
        // <Card>
        //     <CardImage image={book.imageLinks && book.imageLinks.smallThumbnail} />
        //     <select
        //         className="w-38 rounded-full bg-indigo-600 text-white text-xs cursor-pointer"
        //         defaultValue={book.shelf ? book.shelf : 'none'}
        //         onChange={(e) => bookShelfUpdate(book, e.target.value)}
        //     >
        //         <option disabled>
        //             Move to...
        //         </option>
        //         <option value="currentlyReading">Currently Reading</option>
        //         <option value="wantToRead">Want to Read</option>
        //         <option value="read">Read</option>
        //         <option value="none">None</option>
        //     </select>
        //     <CardTitle titleText={book.title} />
        //     <CardAuthors authorNames={book.authors && book.authors.join(', ')} />
        // </Card>
    )
}
export default Book;
