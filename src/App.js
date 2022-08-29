import { useState, useEffect, StrictMode } from 'react';
import { Route, Routes } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Library from './components/Library';
import SearchBooks from './components/SearchBooks';


const App = () => {
  const appTitle = 'myReads';
  const [books, setBooks] = useState([])

  useEffect(() => {
    requestBooks();
  }, [])

  const requestBooks = async () => {
    const res = await BooksAPI.getAll()
    setBooks(res)
  }

  const bookShelfUpdate = (book, destinationShelf) => {
    BooksAPI.update(book, destinationShelf)
    const updatedBooks = books.filter((item) => (
      book.id !== item.id
    ))
    book.shelf = destinationShelf
    setBooks([...updatedBooks, book])
  }

  return (
    <StrictMode>
      <Routes>
        <Route exact path='/' element={
          <Library appTitle={appTitle} books={books} bookShelfUpdate={bookShelfUpdate} />
        }
        />
        <Route path='/search' element={
          <SearchBooks books={books} bookShelfUpdate={bookShelfUpdate} />
        }
        />
      </Routes>
    </StrictMode>
  )
}

export default App;