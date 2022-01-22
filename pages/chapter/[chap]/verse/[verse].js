import { useRouter } from 'next/router'
import verses from '../../../../data/verses'

const Verse = ({ className }) => {
    const router = useRouter()
    const findVerse = verses.filter(
        (verse) =>
            verse.chapter_number == router.query.chap &&
            verse.verse_number == router.query.verse
    )[0]
    return <div className={className}>{findVerse}</div>
}

export default Verse
