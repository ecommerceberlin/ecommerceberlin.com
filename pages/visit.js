import {
  connect,
  Gallery,
  MyHead,
  WidgetVideoWithEventInfo,
  WidgetVisitor,
  WidgetVisitorBenefits,
  WidgetPresenters,
  WidgetSchedule,
  WidgetAllExhibitorsAvatarlist,
  DatasourcePhotos as Photos,
  LayoutMain as Layout,
  WidgetVips,
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

import FeaturedPresenters from '../src/FeaturedPresenters';

class PageVisit extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['exhibitors', 'presenters'],
      settings: settings,
    };
  }

  render() {
    const { url } = this.props;

    return (
      <Layout>
        <MyHead />

        <WidgetVisitor label="visitors.register_alt" first />

        {/* <WidgetSchedule /> */}

        <FeaturedPresenters bio={false} />

        <WidgetVips limit={12} mobile={4} />

        <WidgetVideoWithEventInfo />

        {/* <WidgetPresenters /> */}

        <WidgetVisitorBenefits label="visitors.benefits.title" />

        <WidgetVisitor label="visitors.register" first />

        {/* <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" /> */}

        {/* <WidgetVisitor label="visitors.register" first /> */}

        <Photos>
          {(photos, size) => (
            <Gallery data={photos} size={size} label="event.gallery" />
          )}
        </Photos>
      </Layout>
    );
  }
}

export default connect()(PageVisit);
