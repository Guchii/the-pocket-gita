import Link from 'next/link'
import { useRouter } from 'next/router'
import useFetch from '../util/useFetch'

const Sidebar = ({ openModal }) => {
    const router = useRouter()
    const { chap } = router.query
    const [loading, chapter, error] = useFetch(`chapters/${chap}`)
    const isChapterPage = router.pathname === '/chapter/[chap]'
    return (
        <div className="h-screen w-2/5 bg-red-50 flex flex-col justify-center gap-8 p-8 shadow-2xl">
            <h1 className="text-7xl capitalize">
                <Link href="/">
                    <a>Pocket Gita</a>
                </Link>
            </h1>
            <p className="text-lg text-justify">
                {isChapterPage ? (
                    <>
                        {chapter.map((ch) => (
                            <>{ch.chapter_summary}</>
                        ))}
                    </>
                ) : (
                    <>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quasi minus amet sint unde dicta quos natus quibusdam
                        assumenda? Mollitia dignissimos labore nulla quidem qui
                        perspiciatis accusamus magnam eos unde magni aut
                        nesciunt voluptates odio illum iusto iure quis nostrum,
                        deserunt ex cupiditate assumenda dolores alias. Sunt
                        magni soluta fugit ducimus. Ipsum distinctio adipisci
                        explicabo optio nulla voluptatum! Fugiat nostrum,
                        consequuntur laboriosam esse quod expedita quaerat
                        suscipit quasi nemo? Corporis tenetur reprehenderit
                        velit illum fuga excepturi beatae ullam suscipit numquam
                        veritatis minus, similique voluptatibus dolorum quasi
                        expedita animi repellat esse obcaecati nisi dolorem,
                        soluta repudiandae neque voluptas ipsam. Sunt, enim
                        provident?
                    </>
                )}
            </p>
            <button
                onClick={() => router.push('/explore')}
                className="btn mb-auto"
            >
                Explore
            </button>
            <ul className="flex justify-between gap-2">
                {['about', 'api', 'credits', 'contribute'].map((to) => (
                    <LinkItem to={to} key={to} openModal={openModal} />
                ))}
            </ul>
        </div>
    )
}

const LinkItem = ({ to, openModal }) => (
    <li onClick={() => openModal(to)} className="nav-link">
        {to}
    </li>
)

export default Sidebar
