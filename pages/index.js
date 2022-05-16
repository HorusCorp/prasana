import Head from 'next/head'
import AnimatedCards from '../Components/AnimatedCards'
import Banner from '../Components/Banner'
import Bowenv2 from '../Components/Bowenv2'
import ContactButton from '../Components/ContactButton'
import Footer from '../Components/Footer'

export default function Index() {
  return (
    
    <div>
      <Head>
        <title>Prasana</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Banner/>
        <ContactButton/>
        <AnimatedCards/>
        <Bowenv2/>
        <Footer/>
      </main>

      <footer >
        
      </footer>
    </div>
  )
}
