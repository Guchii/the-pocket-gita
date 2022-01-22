import { useRouter } from 'next/router'
import useFetch from '../../../util/useFetch'

const Chapter = ({ className }) => {
    const router = useRouter()
    const { chap } = router.query
    const [loading, verses, error] = useFetch(`chapters/${chap}/verses`)
    if (loading) {
        return <>Content Loading</>
    }
    if (error) {
        return <>Damn an error occured</>
    }
    return (
        <div className={className + ' grid grid-cols-2 grid-flow-row gap-10'}>
            {verses.map(({ verse_number, id, text }) => {
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
