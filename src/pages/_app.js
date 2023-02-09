import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import '@/styles/globals.css';
import '@/styles/about-us.css';
import '@/styles/contact-us.css';
import '@/styles/services.css';
import '@/styles/booking.css';

export default function App({ Component, pageProps }) {
  return (
  <>
    <Navbar />
    <Component {...pageProps} />
    <ToastContainer />
    <Footer />
  </>
  )
}
