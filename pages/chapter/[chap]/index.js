import { useRouter } from 'next/router'
import Loading from '../../../components/loading'
import useFetch from '../../../util/useFetch'
import usePagination from '../../../util/usePagination'

const Chapter = ({ className }) => {
    const router = useRouter()
    const { chap } = router.query
    const [loading, verses, error] = useFetch(`chapters/${chap}/verses`)
    const [currentPosts, setCurrentPage] = usePagination(verses, 8)
    if (loading) return <Loading className={className} />
    return (
        <div className={className}>
            <div className={'grid grid-cols-2 grid-flow-row gap-10'}>
                {currentPosts.map(({ verse_number, id, text }) => {
                    return (
                        <Card
                            key={id}
                            verse={verse_number}
                            text={text}
                            clickHandler={() =>
                                router.push(
                                    `/chapter/${chap}/verse/${verse_number}`
                                )
                            }
                        />
                    )
                })}
            </div>
            <div className="h-1/6 flex justify-between items-center">
                <button
                    className="font-bold"
                    onClick={() => setCurrentPage(-1)}
                >
                    prev page
                </button>
                <button className="font-bold" onClick={() => setCurrentPage(1)}>
                    next page
                </button>
            </div>
        </div>
    )
}

const Card = ({ verse, text, clickHandler }) => {
    return (
        <div
            onClick={() => clickHandler(verse)}
            className="bg-yellow-300 duration-200 active:translate-y-1 text-black font-bold text-2xl h-36 rounded-xl shadow-xl p-4 cursor-pointer "
        >
            <span className="text-xl self-end">{text}</span>
        </div>
    )
}

export default Chapter
