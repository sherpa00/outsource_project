import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import '@/styles/globals.css'
import "@/styles/about-us.css";

export default function App({ Component, pageProps }) {
  return (
  <>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
  )
}
