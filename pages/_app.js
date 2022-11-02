import '../styles/globals.css'
import '../styles/App.css'
import Navbar from "../components/Navbar"
import { ChakraProvider } from '@chakra-ui/react'

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
    <Navbar/>
    <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
