import { useState } from 'react'

const usePagination = (arr, postsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1)

    const changePage = (pay) => {
        setCurrentPage(currentPage + pay)
    }

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = arr.slice(indexOfFirstPost, indexOfLastPost)

    return [currentPosts, changePage]
}

export default usePagination
