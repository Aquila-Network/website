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
import AquilaXImg from '../images/aquila-x.png';
import { graphql, useStaticQuery } from 'gatsby';

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;

const Index = () => {
  const { site } = useStaticQuery(query);

  return (
    <>
    <Helmet>
      <title>Aquila Network - Human curated search engine</title>
      <meta name="title" content="Aquila Network - Human curated search engine" />
      <meta name="description" content="Aquila Network allows you to build a curated list of websites. Spread new ideas, build a fanbase. Works with paywall-protected websites." /> 
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://aquila.network/" />
      <meta property="og:title" content="Aquila Network - Human curated search engine" />
      <meta property="og:description" content="Aquila Network allows you to build a curated list of websites. Spread new ideas, build a fanbase. Works with paywall-protected websites." />
      <meta property="og:image" content={site.siteMetadata.siteUrl+AquilaXImg}></meta>

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://aquila.network/" />
      <meta property="twitter:title" content="Aquila Network - Human curated search engine" />
      <meta property="twitter:description" content="Aquila Network allows you to build a curated list of websites. Spread new ideas, build a fanbase. Works with paywall-protected websites." />
      <meta property="twitter:image" content={site.siteMetadata.siteUrl+AquilaXImg}></meta>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
      <link rel="shortcut icon" type="image/png" href="./favicon.png"/>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Poppins"></link>
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
   {/* <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
   <AquilaXInAction />
   </ScrollAnimation> */}
   {/* <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
   <PoweredBy />
   </ScrollAnimation> */}
   <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
   <WhyAquilaNetwork />
   </ScrollAnimation>
   {/* <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
   <MileStones />  
   </ScrollAnimation> */}
   {/* <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
   <OurBlog /> 
   </ScrollAnimation> */}
   {/* <ScrollAnimation animateIn="fadeIn" animateOnce={true}> */}
   {/* <Faq /> */}
   {/* </ScrollAnimation> */}
   <Footer /> 
    </>
  )
}

export default Index
