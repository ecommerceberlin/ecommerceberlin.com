import {
  connect,
  MyHead as Head,
  // MyLink as Link,
  // FsVideo,
  WidgetVideoWithEventInfo,
  //WidgetVideoWithReviews,
  WidgetVisitor,
  WidgetFeaturedCompanies,
  WidgetAllExhibitorsColumnList,
  WidgetSalesMap,
  // WidgetPresenters,
  WidgetSchedule,
  // WidgetExhibitors,
  LayoutMain as Layout,
  WidgetRoleButtons,
  Wrapper,
  Facebook,
  WidgetPartners,
} from 'eventjuicer-site-components';

// import FeaturedExhibitors from '../src/FeaturedExhibitors';
import FeaturedPresenters from '../src/FeaturedPresenters';

const settings = require('../settings').default;

class PageIndex extends React.Component {
  static async getInitialProps({ query, isServer, store }) {
    return {
      preload: ['allexhibitors', 'companies'],
      settings: settings,
      //    load : ["bookingmap", "formdata", "ticketgroups"]
    };
  }

  render() {
    return (
      <Layout>
        <Head />

        <WidgetVideoWithEventInfo />

        <WidgetSchedule />

        <WidgetVisitor
          label="visitors.register"
          secondaryLabel="event.parties"
        />

        <WidgetFeaturedCompanies />

        <WidgetSalesMap
          label="exhibitors.map.title2"
          secondaryLabel="exhibitors.map.opensales"
        />

        <FeaturedPresenters bio={true} />

        <WidgetRoleButtons first={true} />

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
      </Layout>
    );
  }
}

export default connect(
  null,
  null,
)(PageIndex);
