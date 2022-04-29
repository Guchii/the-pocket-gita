import Sidebar from '../components/sidebar'
import '../styles/globals.css'
import { Provider } from '../util/provider'
import Modal from '../components/modal'
import { useState } from 'react'

function MyApp({ Component, pageProps }) {
    const [modal, setModal] = useState({ isOpen: false, open: 'about' })
    return (
        <Provider>
            <div className="flex">
                <Sidebar
                    openModal={(open) => setModal({ isOpen: true, open })}
                />
                <Component
                    className="text-white h-screen overflow-auto w-3/5 p-8"
                    {...pageProps}
                />
            </div>
            <Modal
                modal={modal}
                close={() => setModal({ ...modal, isOpen: false })}
            />
        </Provider>
    )
}

export default MyApp
