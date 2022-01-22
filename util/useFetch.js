import { useEffect, useState } from 'react'

const apiBaseURL =
    process.env.NODE_ENV === 'development'
        ? '//localhost:5000'
        : 'https://the-pocket-gita.herokuapp.com'

const useFetch = (path) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    useEffect(() => {
        const main = async () => {
            setLoading(true)
            try {
                const res = await fetch(`${apiBaseURL}/${path}`)
                const data = await res.json()
                setData(data)
            } catch {
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        main()
    }, [path])

    return [loading, data, error]
}

export default useFetch
