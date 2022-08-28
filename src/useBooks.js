import { useState, useEffect } from 'react'
import * as BooksAPI from './BooksAPI'
import PropTypes from 'prop-types'

const localCache = {}

const useBooks = (query) => {
    const [bookList, setBookList] = useState([])
    const [status, setStatus] = useState('unloaded')
    useEffect(() => {
        if (!query) {
            setBookList([])
        } else if (localCache[query]) {
            setBookList(localCache[query])
        } else {
            requestBooks()
        }
        async function requestBooks() {
            setBookList([])
            setStatus('loading...')
            const res = await BooksAPI.search(query)
            if (res.eerror) {
                setBookList([])
            } else {
                localCache[query] = res || []
                setBookList(localCache[query])
                setStatus('loaded...')
            }
        }
    }, [query])
    return [bookList, status]
}
export default useBooks

useBooks.propTypes = {
    query: PropTypes.string.isRequired
}