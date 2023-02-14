import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Transition from '@/components/transition';
import '@/styles/transition.css';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import '@/styles/globals.css';
import '@/styles/about-us.css';
import '@/styles/contact-us.css';
import '@/styles/services.css';
import '@/styles/booking.css';
import '@/styles/faq.css';
import '@/styles/terms_and_conditions.css';

export default function App({ Component, pageProps }) {
  return (
  <>
    <Transition>
      <Navbar />
      <Component {...pageProps} />
      <ToastContainer />
      <Footer />
    </Transition>
  </>
  )
}
