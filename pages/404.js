import React from 'react'

import {
  connect,
 
  // MyLink as Link,
  // FsVideo,
  WidgetVideoWithEventInfo,
  //WidgetVideoWithReviews,
  WidgetVisitor,
  WidgetFeaturedCompanies,
  WidgetAllExhibitorsColumnList,

  // WidgetExhibitors,
  WidgetRoleButtons,
  Wrapper,
  Facebook,
  reduxWrapper,
  configure,
 // WidgetFeaturedPresenters
} from 'eventjuicer-site-components';

import { AllPartners, WidgetVisitorWithVip, WidgetVisitorNonVip } from '../compositions';

const settings = require('../settings').default;

const PageIndex = (props) => (

   
  <React.Fragment>


  {/* <WidgetSchedule /> */}

  <WidgetVisitorWithVip first />

{/* <WidgetVisitor setting="visitor.register" first /> */}

  <WidgetVideoWithEventInfo />

  <WidgetFeaturedCompanies />

  {/* <WidgetSalesMap
    label="exhibitors.map.title2"
    secondaryLabel="exhibitors.map.opensales"
  /> */}


  <WidgetRoleButtons first={true} />

  {/* <FeaturedExhibitors /> */}

 

  {/* <WidgetVideoWithReviews overlay="black" /> */}

  {/* <FsVideo
    background="https://res.cloudinary.com/eventjuicer/image/upload/v1534553598/poster_stage1.jpg"
    videoSrc="https://res.cloudinary.com/eventjuicer/video/upload/v1534553583/video_stage1.mp4"
  /> */}

  {/* <WidgetVisitor setting="visitor.register" /> */}
  <WidgetVisitorNonVip />

   <WidgetAllExhibitorsColumnList />

   <AllPartners />

  </React.Fragment>
 
) 

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  return await configure(props, {
    settings: settings,
    preload: []
  })
  
})

export default connect()(PageIndex);
