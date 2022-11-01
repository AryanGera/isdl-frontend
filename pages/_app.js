import '../styles/globals.css'
import '../styles/App.css'
import Navbar from "../components/Navbar"

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar/>
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
