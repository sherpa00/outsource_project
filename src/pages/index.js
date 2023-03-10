
import Head from 'next/head'
import Hero from '@/components/hero'
import TrustedBy from '@/components/trustedBy'
import Services from '@/components/services'
import AboutUs from '@/components/aboutUs'
import Pricing from '@/components/pricing'
import Faq from '@/components/faq'
import ContactUs from '@/components/contact'
import Testomonials from '@/components/testomonials'
import HowToBook from '@/components/howtobook'

export default function Home() {
  return (
    <>
      <Head>
        <title>Company Name</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Cleaing Services in Australia, quality cleaning services, australia cleaning company, cleaning company located in australia, cleaning company" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <Hero />
          <TrustedBy />
          <Testomonials />
          <Services />
          <HowToBook />
          <AboutUs />
          <Pricing />
          <Faq />
          <ContactUs />
      </main>
    </>
  )
}
