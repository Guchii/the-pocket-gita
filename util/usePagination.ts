import { useEffect, useState } from 'react'

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

    const indexOfLastPost = currentPage * postsPerPage
    const indexOfFirstPost = indexOfLastPost - postsPerPage
    const currentPosts = arr.slice(indexOfFirstPost, indexOfLastPost)

    useEffect(() => {
        if (currentPage == 1)
            setNavigation({
                back: false,
                forward: true,
            })
        else
            setNavigation({
                back: true,
                forward: true,
            })
        if (
            arr.slice(postsPerPage * (currentPage + 1) - postsPerPage)
                .length === 0
        )
            setNavigation({
                ...navigation,
                forward: false,
            })
    }, [currentPage, navigation, currentPosts, arr, postsPerPage])

    return {
        currentPosts,
        navigation,
        changePage: (pay: number) => {
            setCurrentPage(currentPage + pay)
        },
    }
}

export default usePagination
