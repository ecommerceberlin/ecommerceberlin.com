import {
  connect,
  MyHead as Head,
  // MyLink as Link,
  // FsVideo,
  // WidgetVideoWithEventInfo,
  WidgetVideoWithReviews,
  WidgetVisitor,
  // WidgetFeaturedExhibitors,
  WidgetAllExhibitorsColumnList,
  WidgetRoleButtons,
  WidgetSalesMap,
  // WidgetPresenters,
  // WidgetSchedule,
  // WidgetExhibitors,
} from 'eventjuicer-site-components';

import Schedule from '../src/Schedule';
import Hero from '../src/Hero';
import FeaturedExhibitors from '../src/FeaturedExhibitors';
import FeaturedPresenters from '../src/FeaturedPresenters';
import Layout from '../src/Layout';

class PageIndex extends React.Component {
  static async getInitialProps({ query, isServer, store }) {
    return {
      preload: ['exhibitors'],
      //    load : ["bookingmap", "formdata", "ticketgroups"]
    };
  }

  render() {
    return (
      <Layout>
        <Head />

        <Hero />

        <WidgetSalesMap
          label="exhibitors.map.title2"
          secondaryLabel="exhibitors.map.opensales"
        />

        <WidgetVisitor
          label="visitors.register"
          secondaryLabel="event.parties"
        />

        <Schedule />

        <WidgetRoleButtons />

        <FeaturedPresenters bio={false} />

        <WidgetVisitor
          label="visitors.register_alt"
          secondaryLabel="event.parties"
        />

        <FeaturedExhibitors />

        <WidgetVideoWithReviews overlay="black" />

        <WidgetAllExhibitorsColumnList />

        {/* <FsVideo
          background="https://res.cloudinary.com/eventjuicer/image/upload/v1534553598/poster_stage1.jpg"
          videoSrc="https://res.cloudinary.com/eventjuicer/video/upload/v1534553583/video_stage1.mp4"
        /> */}

        <WidgetVisitor
          label="visitors.register"
          secondaryLabel="event.parties"
        />
      </Layout>
    );
  }
}

export default connect(
  null,
  null,
)(PageIndex);
