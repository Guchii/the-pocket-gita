import Sidebar from '../components/sidebar'
import '../styles/globals.css'
import { Provider } from '../util/provider'

function MyApp({ Component, pageProps }) {
    return (
        <Provider>
            <main className="grid grid-cols-[0.6fr_1fr]">
                <Sidebar />
                <Component
                    className="text-white shadow-inner p-10 h-screen overflow-auto "
                    {...pageProps}
                />
            </main>
        </Provider>
    )
}

export default MyApp
