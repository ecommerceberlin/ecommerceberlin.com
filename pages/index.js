import React from 'react'

import {
  connect,
  WidgetVideoWithEventInfo,
  WidgetVisitor,
  WidgetFeaturedCompanies,
  WidgetAllExhibitorsColumnList,
  WidgetRoleButtons,
  WidgetPartners,
  reduxWrapper,
  configure,
  WidgetBanner,
  WidgetFeaturedPresenters,
  WidgetSalesMap
} from 'eventjuicer-site-components';

 
import VotingCategories from '../compositions/VotingCategories'

const settings = require('../settings').default;

const PageIndex = (props) => (

   
  <React.Fragment>

  <WidgetVideoWithEventInfo />

  {/* <WidgetSchedule /> */}

  {/* <WidgetBanner setting="banner_cfp" /> */}

  <VotingCategories intro={ null } />

  <WidgetRoleButtons first={false} />
  
  <WidgetFeaturedCompanies />

  <WidgetSalesMap
   label="exhibitors.map.title"
   secondaryLabel="exhibitors.map.opensales"
  />

  <WidgetFeaturedPresenters limit={8}/>



  {/* <FeaturedExhibitors /> */}
  {/* <WidgetVideoWithReviews overlay="black" /> */}

  <WidgetAllExhibitorsColumnList />

  {/* <FsVideo
    background="https://res.cloudinary.com/eventjuicer/image/upload/v1534553598/poster_stage1.jpg"
    videoSrc="https://res.cloudinary.com/eventjuicer/video/upload/v1534553583/video_stage1.mp4"
  /> */}

  <WidgetVisitor setting="visitor.register" />

  <WidgetPartners
    label="partners.media.title"
    filter={item =>
      item['scopes(deprecated)'].indexOf('media') > -1 &&
      item.logotype.indexOf('cloudinary') > -1
    }
    limit={50}
  />

  <WidgetPartners
    label="partners.community.title"
    filter={item =>
      item['scopes(deprecated)'].indexOf('community') > -1 &&
      item.logotype.indexOf('cloudinary') > -1
    }
    limit={50}
  />

  <WidgetPartners
    label="partners.communication.title"
    filter={item =>
      item['scopes(deprecated)'].indexOf('communication') > -1 &&
      item.logotype.indexOf('cloudinary') > -1
    }
    center={true}
    limit={50}
  />
  </React.Fragment>
 
) 

export const getStaticProps = reduxWrapper.getStaticProps(async (props) => {

  await configure(props, {
    settings: settings,
    preload: ['allexhibitors', 'companies', 'callforpapers']
  })

  return {props: {}, revalidate: 30}

  
})

export default connect()(PageIndex);
