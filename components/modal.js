const Modal = ({ children, modal, close }) => {
    if (!modal.isOpen) return null
    return (
        <div
            className="fixed h-screen w-screen top-0 left-0 flex justify-center items-center shadow-2xl"
            style={{ background: 'rgba(0,0,0,0.7)' }}
        >
            <div className="w-3/4 h-3/4 bg-red-600 text-white font-bold shadow-2xl p-10 relative rounded-xl">
                <div className="flex font-bold justify-between">
                    <h2 className="text-5xl">{modal.open}</h2>
                    <button
                        className="bg-yellow-300 hover:bg-yellow-400 duration-200 w-16 rounded-xl text-black font-bold "
                        onClick={close}
                    >
                        close
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Modal
