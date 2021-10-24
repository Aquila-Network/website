import React from 'react';
import { Helmet } from 'react-helmet';
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



const Index = () => {
  return (
    <>
    <Helmet>
      <title>Aquila Network | Manage, share and discover smart bookmarks online</title>
      <meta name="title" content="Aquila Network | Manage, share and discover smart bookmarks online" />
      <meta name="description" content="Aquila Network is a search-first hub for bookmarks. Create and search your bookmarks by their content. It's Open Sourced for trust, ensuring privacy by design." /> 
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aquila.network/" />
      <meta property="og:title" content="Aquila Network | Manage, share and discover smart bookmarks online" />
      <meta property="og:description" content="Aquila Network is a search-first hub for bookmarks. Create and search your bookmarks by their content. It's Open Sourced for trust, ensuring privacy by design." />
      <meta property="og:image" content="https://aquila.network/_next/static/images/aquila-x-1eebbe30f344ecb85b0328d907b762d0.png"></meta>

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://aquila.network/" />
      <meta property="twitter:title" content="Aquila Network | Manage, share and discover smart bookmarks online" />
      <meta property="twitter:description" content="Aquila Network is a search-first hub for bookmarks. Create and search your bookmarks by their content. It's Open Sourced for trust, ensuring privacy by design." />
      <meta property="twitter:image" content="https://aquila.network/_next/static/images/aquila-x-1eebbe30f344ecb85b0328d907b762d0.png"></meta>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
      <link rel="shortcut icon" type="image/png" href="./favicon.png"/>
    </Helmet>
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

export default Index
