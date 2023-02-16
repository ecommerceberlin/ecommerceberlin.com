import React from 'react'

import {
  connect,
  WidgetVideoWithEventInfo,
  WidgetVisitor,
  WidgetFeaturedCompanies,
  WidgetAllOrCurrentExhibitorsColumnList,
  WidgetRoleButtons,
  reduxWrapper,
  configure,
  // WidgetBanner,
  WidgetPresenters,
  // WidgetSalesMap,
  WidgetSchedule,
  WidgetBanner
} from 'eventjuicer-site-components';

import {AllPartners} from '../compositions'

// import VotingCategories from '../compositions/VotingCategories'

const settings = require('../settings').default;

const PageIndex = (props) => (

   
  <React.Fragment>

  <WidgetVideoWithEventInfo />

  <WidgetVisitor setting="visitor.register" />

  {/* <WidgetSalesMap
   label="exhibitors.map.title"
   secondaryLabel="exhibitors.map.opensales"
  /> */}

  <WidgetSchedule />
  <WidgetBanner setting="metaverse" />

  <WidgetFeaturedCompanies />

  {/* <WidgetFeaturedPresenters limit={8}/> */}

  <WidgetPresenters filter={(p)=>p.featured} limt={8} wrapperProps={{
    label: "presenters.list_featured"
  }}/>



  <WidgetRoleButtons first={false} />

  {/* <WidgetVisitor setting="visitor.register" /> */}


  {/* <WidgetBanner setting="banner_cfp" /> */}

  {/* <VotingCategories intro={ null } /> */}


  <WidgetAllOrCurrentExhibitorsColumnList />

  {/* <FsVideo
    background="https://res.cloudinary.com/eventjuicer/image/upload/v1534553598/poster_stage1.jpg"
    videoSrc="https://res.cloudinary.com/eventjuicer/video/upload/v1534553583/video_stage1.mp4"
  /> */}


  <WidgetVisitor setting="visitor.register" />

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
