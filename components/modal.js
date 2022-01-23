import { motion } from 'framer-motion'
const Modal = ({ children, modal, close }) => {
    if (!modal.isOpen) return null
    return (
        <div className="h-screen w-screen fixed top-0 left-0">
            <motion.div
                className="top-0 left-0 h-full w-full flex justify-center items-center shadow-2xl cursor-pointer z-10"
                style={{ background: 'rgba(0,0,0,0.7)' }}
                onClick={close}
            ></motion.div>
            <motion.div
                className="absolute z-20 w-3/4 h-3/4 bg-red-600 text-white font-bold shadow-2xl p-10 rounded-xl"
                style={{
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <div className="flex font-bold justify-between">
                    <h2 className="text-5xl">{modal.open}</h2>
                    <button
                        className="bg-yellow-400 hover:bg-yellow-500 active:translate-y-1 duration-200 w-16 rounded-xl text-black font-bold "
                        onClick={close}
                    >
                        close
                    </button>
                </div>
            </motion.div>
        </div>
    )
}

export default Modal
