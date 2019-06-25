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
} from 'eventjuicer-site-components';

import FeaturedExhibitors from '../src/FeaturedExhibitors';
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

        {/* <WidgetSchedule /> */}

        <WidgetVideoWithEventInfo />

        <WidgetSalesMap
          label="exhibitors.map.title2"
          secondaryLabel="exhibitors.map.opensales"
        />

        <WidgetFeaturedCompanies />

        {/* <FeaturedPresenters bio={false} /> */}

        {/* <FeaturedExhibitors /> */}

        {/* <WidgetVisitor
          label="visitors.register_alt"
          secondaryLabel="event.parties"
        /> */}

        {/* <WidgetVideoWithReviews overlay="black" /> */}

        <WidgetVisitor
          label="visitors.register"
          secondaryLabel="event.parties"
        />

        <WidgetAllExhibitorsColumnList />

        {/* <FsVideo
          background="https://res.cloudinary.com/eventjuicer/image/upload/v1534553598/poster_stage1.jpg"
          videoSrc="https://res.cloudinary.com/eventjuicer/video/upload/v1534553583/video_stage1.mp4"
        /> */}

        <WidgetRoleButtons first={true} />

        <WidgetVisitor
          label="visitors.register"
          secondaryLabel="event.parties"
        />

        <Wrapper label="partners.media.title">
          <div style={{ textAlign: 'center' }}>
            <img
              src="https://res.cloudinary.com/eventjuicer/image/upload/c_limit,w_1000,f_auto/v1549990106/media_partners.jpg"
              alt=""
              style={{ width: '100%', maxWidth: 900 }}
            />
          </div>
        </Wrapper>

        <Wrapper label="partners.community.title">
          <div style={{ textAlign: 'center' }}>
            <img
              src="https://res.cloudinary.com/eventjuicer/image/upload/c_limit,w_500,f_auto/v1549990106/community_partners.jpg"
              alt=""
              style={{ width: '100%', maxWidth: 500 }}
            />
          </div>
        </Wrapper>
      </Layout>
    );
  }
}

export default connect(
  null,
  null,
)(PageIndex);
