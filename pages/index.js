import {
  connect,
  WidgetVideoWithEventInfo,
  WidgetVisitor,
  WidgetFeaturedCompanies,
  WidgetAllExhibitorsColumnList,
  WidgetRoleButtons,
  WidgetPartners,
  reduxWrapper,
  configure
} from 'eventjuicer-site-components';

// import FeaturedExhibitors from '../src/FeaturedExhibitors';
//import FeaturedPresenters from '../src/FeaturedPresenters';

const settings = require('../settings').default;

const PageIndex = (props) => (

   
  <React.Fragment>

  <WidgetVideoWithEventInfo />

  {/* <WidgetSchedule /> */}

  <WidgetVisitor
    label="visitors.register"
    secondaryLabel="event.parties"
  />

  <WidgetFeaturedCompanies />

  {/* <WidgetSalesMap
    label="exhibitors.map.title2"
    secondaryLabel="exhibitors.map.opensales"
  /> */}

  {/* <WidgetPresentersAll /> */}

  <WidgetRoleButtons first={false} />

  {/* <FeaturedExhibitors /> */}

  {/* <WidgetVisitor
    label="visitors.register_alt"
    secondaryLabel="event.parties"
  /> */}

  {/* <WidgetVideoWithReviews overlay="black" /> */}

  <WidgetAllExhibitorsColumnList />

  {/* <FsVideo
    background="https://res.cloudinary.com/eventjuicer/image/upload/v1534553598/poster_stage1.jpg"
    videoSrc="https://res.cloudinary.com/eventjuicer/video/upload/v1534553583/video_stage1.mp4"
  /> */}

  <WidgetVisitor
    label="visitors.register"
    secondaryLabel="event.parties"
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

export const getStaticProps = reduxWrapper.getStaticProps(async ({ store }) => {

  await configure(store, {
    settings: settings,
    preload: ['allexhibitors', 'companies', 'presenters_all']
  })
  
})

export default connect()(PageIndex);
