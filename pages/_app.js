import Sidebar from '../components/sidebar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    return (
        <main className="grid grid-cols-[0.6fr_1fr]">
            <Sidebar />
            <Component {...pageProps} />
        </main>
    )
}

export default MyApp
