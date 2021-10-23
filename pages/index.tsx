import type { NextPage } from 'next'
import Head from 'next/head'
import ScrollAnimation from 'react-animate-on-scroll';

import Banner from '../components/home/Banner';
import AquilaXBanner from '../components/home/AquilaXBanner'
import DiscoverBanner from '../components/home/DiscoverBanner'
import ControlBanner from '../components/home/ControlBanner'
import AquilaXInAction from '../components/home/AquilaXInAction'
import WhyAquilaNetwork from '../components/home/WhyAquilaNetwork'
import PoweredBy from '../components/home/PoweredBy'
import MileStones from '../components/home/MileStones'
import OurBlog from '../components/home/OurBlog'
import Faq from '../components/home/Faq'
import Footer from '../components/home/Footer'
import Header from '../components/home/Header'



const Home: NextPage = () => {
  return (
    <>
    <Head>
      <title></title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
    </Head>
   <Header />
   <ScrollAnimation animateIn="fadeIn" animateOnce={true} >
    <Banner />
    <AquilaXBanner /> 
   </ScrollAnimation>
   <ScrollAnimation animateIn="fadeIn"  animateOnce={true}>
   <DiscoverBanner />
   </ScrollAnimation>
   <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
    <ControlBanner />
   </ScrollAnimation>
   <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
   <AquilaXInAction />
   </ScrollAnimation>
   <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
   <PoweredBy />
   </ScrollAnimation>
   <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
   <WhyAquilaNetwork />
   </ScrollAnimation>
   <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
   <MileStones />  
   </ScrollAnimation>
   <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
   <OurBlog /> 
   </ScrollAnimation>
   <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
   <Faq />
   </ScrollAnimation>
   <Footer /> 
    </>
  )
}

export default Home
