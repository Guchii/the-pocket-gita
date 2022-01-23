import { useRouter } from 'next/router'
import Loading from '../../../../components/loading'
import useFetch from '../../../../util/useFetch'

const Verse = ({ className }) => {
    const router = useRouter()
    const { chap, verse } = router.query
    const [loading, verses, error] = useFetch(
        `chapters/${chap}/verses/${verse}`
    )
    if (loading) return <Loading className={className} />
    return (
        <div className={className + ' flex justify-center items-center'}>
            {verses.map(({ text }) => {
                return (
                    <div key="1" className="text-5xl">
                        {text}
                    </div>
                )
            })}
        </div>
    )
}

export default Verse
