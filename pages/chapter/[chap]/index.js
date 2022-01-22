import { useRouter } from 'next/router'
import verses from '../../../data/verses'

const Chapter = ({ className }) => {
    const router = useRouter()
    const clickHandler = (verse) => {
        router.push(`/chapter/${router.query.chap}/verse/${verse}`)
    }
    const chapVerses = verses.filter(
        (verse) => verse.chapter_number == router.query.chap
    )
    return (
        <div className={className + ' grid grid-cols-2 grid-flow-row gap-10'}>
            {chapVerses.map((verse) => {
                return (
                    <Card
                        key={verse.id}
                        verse={verse.verse_number}
                        text={verse.text}
                        clickHandler={clickHandler}
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
