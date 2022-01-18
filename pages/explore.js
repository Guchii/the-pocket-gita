import { useEffect, useState } from 'react'

const Explore = () => {
    const [chapters, setChapters] = useState(null)
    useEffect(() => {
        const fetchChapters = async () => {
            // const res = await fetch('https://bhagwad-gita.vercel.app/chapters')

            const data = await res.json()
            setChapters(JSON.stringify(chapters))
        }
        fetchChapters()
    }, [])
    return <>{chapters}</>
}

export default Explore
