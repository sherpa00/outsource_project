import { Bebas_Neue,Montserrat } from '@next/font/google';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Transition from '@/components/transition';
import '@/styles/transition.css';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { AuthContextProvider } from 'context/AuthContext';
import '@/styles/globals.css';
import '@/styles/about-us.css';
import '@/styles/contact-us.css';
import '@/styles/services.css';
import '@/styles/booking.css';
import '@/styles/faq.css';
import '@/styles/terms_and_conditions.css';
import '@/styles/privacy-policy.css';
import '@/styles/login.css';
import '@/styles/dashboard.css';

export const montserrat = Montserrat({
  weight: '200',
  subsets: ['latin']
});
export const bebas_neue = Bebas_Neue({
  weight: '400',
  subsets: ['latin']
});

export default function App({ Component, pageProps }) {

  return (
  <>
  <style jsx global>{`
        :root {
          --primary-font: ${bebas_neue.style.fontFamily};
          --secondary-font: ${montserrat.style.fontFamily};
        }
      `}</style>
    <Transition>
      <AuthContextProvider>
        <Navbar />
        <Component {...pageProps}/>
        <ToastContainer />
        <Footer />
      </AuthContextProvider>
    </Transition>
  </>
  )
}
