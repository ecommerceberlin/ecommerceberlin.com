import React from 'react'

import {
  connect,
  WidgetVideoWithEventInfo,
  WidgetVisitor,
  WidgetFeaturedCompanies,
  WidgetAllOrCurrentExhibitorsColumnList,
  WidgetRoleButtons,
  WidgetPartners,
  reduxWrapper,
  configure,
  // WidgetBanner,
  WidgetPresenters,
  // WidgetSalesMap,
  // WidgetSchedule
} from 'eventjuicer-site-components';

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

  <WidgetRoleButtons first={false} />

  <WidgetFeaturedCompanies />

  {/* <WidgetFeaturedPresenters limit={8}/> */}

  <WidgetPresenters filter={(p)=>p.featured} limt={8} wrapperProps={{
    label: "presenters.list_featured"
  }}/>

  {/* <WidgetSchedule /> */}

  {/* <WidgetVisitor setting="visitor.register" /> */}


  {/* <WidgetBanner setting="banner_cfp" /> */}

  {/* <VotingCategories intro={ null } /> */}


  <WidgetAllOrCurrentExhibitorsColumnList />

  {/* <FsVideo
    background="https://res.cloudinary.com/eventjuicer/image/upload/v1534553598/poster_stage1.jpg"
    videoSrc="https://res.cloudinary.com/eventjuicer/video/upload/v1534553583/video_stage1.mp4"
  /> */}


  <WidgetPartners
    label="partners.association.title"
    filter={item =>
      item['scopes(deprecated)'].indexOf('association') > -1 &&
      item.logotype.indexOf('cloudinary') > -1
    }
    limit={50}
  />

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

  return await configure(props, {
    settings: settings,
    preload: ['exhibitors', 'companies']
  })

  
})

export default connect()(PageIndex);
