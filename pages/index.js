import React from 'react'

import {
  connect,
  WidgetVideoWithEventInfo,
  // WidgetVisitor,
  WidgetFeaturedCompanies,
  WidgetAllOrCurrentExhibitorsColumnList,
  WidgetRoleButtons,
  reduxWrapper,
  configure,
  // WidgetBanner,
  WidgetPresenters,
  WidgetSalesMap,
  // WidgetSchedule,
  // WidgetBanner,
  MyHead,
  Wrapper,
  WidgetFeaturedPresenters
} from 'eventjuicer-site-components';

import {AllPartners, WidgetVisitorNonVip, WidgetVisitorWithVip} from '../compositions'
import RecapVideo from '../compositions/RecapVideo';
import Head from 'next/head'
import WidgetOffer from '../compositions/WidgetOffer';

// import VotingCategories from '../compositions/VotingCategories'

const settings = require('../settings').default;

const PageIndex = (props) => (

   
  <React.Fragment>

  <MyHead image="https://res.cloudinary.com/ecommerceberlin/image/upload/v1693817519/Website/ebe24_og_home.jpg" url="/">
      {(data) => <Head>{data}</Head>}
    </MyHead>

  {/* <WidgetSchedule /> */}
  <WidgetVideoWithEventInfo />

  <WidgetVisitorWithVip />
  <WidgetFeaturedPresenters limit={8}/>
  {/* <WidgetVisitor setting="visitor.register" /> */}
  <Wrapper>
  {/* <WidgetSalesMap
   label="exhibitors.map.title"
   secondaryLabel="exhibitors.map.opensales"
  /> */}
  {/* <WidgetOffer /> */}

  {/* <WidgetBanner setting="metaverse" /> */}

  <WidgetFeaturedCompanies />

  <RecapVideo />

  </Wrapper>

  {/* <WidgetFeaturedPresenters limit={8}/> */}

  <WidgetPresenters filter={(p)=>p.featured} limt={8} wrapperProps={{
    label: "presenters.list_featured"
  }}/>



  {/* <WidgetRoleButtons first={false} /> */}

  {/* <WidgetVisitor setting="visitor.register" /> */}
  


  {/* <WidgetBanner setting="banner_cfp" /> */}

  {/* <VotingCategories intro={ null } /> */}




  {/* <FsVideo
    background="https://res.cloudinary.com/eventjuicer/image/upload/v1534553598/poster_stage1.jpg"
    videoSrc="https://res.cloudinary.com/eventjuicer/video/upload/v1534553583/video_stage1.mp4"
  /> */}


  {/* <WidgetVisitor setting="visitor.register" /> */}
  {/* <WidgetVisitorNonVip /> */}


  {/* <WidgetAllOrCurrentExhibitorsColumnList /> */}

  {/* <WidgetVisitorNonVip /> */}

  <AllPartners />


  </React.Fragment>
 
) 

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings: settings,
    // preload: ['exhibitors', 'companies']
  })

  
})

export default connect()(PageIndex);
