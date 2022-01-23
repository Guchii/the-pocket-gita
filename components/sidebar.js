import { useRouter } from 'next/router'
import useFetch from '../util/useFetch'
import { motion } from 'framer-motion'

const Sidebar = ({ openModal }) => {
    const router = useRouter()
    const { chap } = router.query
    const [loading, chapter, error] = useFetch(`chapters/${chap}`)
    const isChapterPage = router.pathname === '/chapter/[chap]'
    return (
        <motion.div
            initial={{ opacity: 0, x: -1000 }}
            animate={{ opacity: 1, x: 0 }}
            className="h-screen space-y-20 sticky self-start bg-red-50 p-10 shadow-2xl w-full text-center md:w-2/5 md:text-left"
        >
            <h1 className="head text-8xl font-black h-1/4 ">
                The <br /> Pocket Gita
            </h1>
            <p className="main text-xl h-1/4 overflow-auto">
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
            <div className="bottom h-1/4 space-y-14">
                <button
                    onClick={() => router.push('/explore')}
                    className="duration-200 bg-red-600 hover:bg-red-700 active:translate-y-1 text-white text-2xl w-1/2 p-4 font-bold rounded-xl"
                >
                    Explore
                </button>
                <ul className="flex justify-start w-full font-bold text-3xl space-x-6">
                    <li
                        onClick={() => openModal('about')}
                        className="hover:underline underline-offset-1 cursor-pointer"
                    >
                        about
                    </li>
                    <li
                        onClick={() => openModal('api')}
                        className="hover:underline underline-offset-1 cursor-pointer"
                    >
                        api
                    </li>
                    <li
                        onClick={() => openModal('credits')}
                        className="hover:underline underline-offset-1 cursor-pointer"
                    >
                        credits
                    </li>
                    <li
                        onClick={() => openModal('contribute')}
                        className="hover:underline underline-offset-1 cursor-pointer"
                    >
                        contribute
                    </li>
                </ul>
            </div>
        </motion.div>
    )
}

export default Sidebar
