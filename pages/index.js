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
  WidgetFeaturedPresenters,
  Box,
  MyButton,
} from 'eventjuicer-site-components';

import {AllPartners, WidgetVisitorNonVip, WidgetVisitorWithVip} from '../compositions'
import RecapVideo from '../compositions/RecapVideo';
import Head from 'next/head'
import WidgetOffer from '../compositions/WidgetOffer';

// import VotingCategories from '../compositions/VotingCategories'

const settings = require('../settings').default;

const PageIndex = (props) => (
<div style={{ backgroundColor: "white" }}>
   
  <React.Fragment>

  <MyHead image="https://res.cloudinary.com/ecommerceberlin/image/upload/v1693817519/Website/ebe24_og_home.jpg" url="/">
      {(data) => <Head>{data}</Head>}
    </MyHead>

  {/* <WidgetSchedule /> */}
  <WidgetVideoWithEventInfo />

  {/* <WidgetVisitorWithVip /> */}
  {/* <WidgetVisitorNonVip /> */}
  <WidgetFeaturedPresenters filter={(p)=>p.featured} limit={8}/>
  {/* <Box textAlign="center" mt={2}>
        <MyButton
          href="/speakers"
          label="allspeakers.button"
          variant="outlined"
          style={{ width: "300px", height: "50px" }}
        />
  </Box> */}
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

  {/* <WidgetPresenters filter={(p)=>p.featured} limt={8} wrapperProps={{
    label: "presenters.list_featured"
  }}/> */}



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
  </div>
 
) 

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings: settings,
    // preload: ['exhibitors', 'companies']
  })

  return {
    props: {},
    revalidate: 100000
  }
})

export default connect()(PageIndex);
