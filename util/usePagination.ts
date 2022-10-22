import { useState } from 'react'

const usePagination = <T>(
    arr: Array<T>,
    postsPerPage: number
): {
    currentPosts: Array<T>
    changePage: (pay: number) => void
    navigation: { back: boolean; forward: boolean }
} => {
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [navigation, setNavigation] = useState<{
        back: boolean
        forward: boolean
    }>({ back: false, forward: false })

    const changePage = (pay: number) => {
        setCurrentPage(currentPage + pay)
    }

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = arr.slice(indexOfFirstPost, indexOfLastPost)

    return { currentPosts, navigation, changePage }
}

export default usePagination
