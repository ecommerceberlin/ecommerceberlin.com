import dynamic from 'next/dynamic';

import {
  connect,
  MyHead as Head,
  MyLink as Link,
  WidgetSalesMap,
  WidgetExhibitorBenefits,
  //WidgetVideoWithReviews,
  WidgetAllExhibitorsAvatarlist,
  //DatasourceExhibitors,
  WidgetVips,
  DatasourcePhotos,
  Wrapper,
  Gallery,
  Faq,
  // Avatarlist,
  // Typography,
  // WidthAwareInfo,
  // People,
  // GridBenefits
  LayoutMain as Layout,
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

class PageExhibit extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['exhibitors', 'allexhibitors'],
      settings: settings,
    };
  }

  render() {
    const { url } = this.props;

    return (
      <Layout>
        <Head />

        <WidgetExhibitorBenefits first label="exhibitors.benefits.title" />

        <WidgetSalesMap
          label="exhibitors.map.title"
          secondaryLabel="exhibitors.map.opensales"
        />

        {/* <WidgetVideoWithReviews /> */}

        <WidgetVips />

        <Wrapper label="exhibitors.faq.name">
          <Faq
            url={url}
            baseLabel="exhibitors.faq.become"
            items={[
              {
                label: 'included_services',
                important: true,
                buttons: [],
              },
              {
                baseLabel: 'exhibitors.faq.before_event',
                label: 'additional_paid_services',
              },
              { label: 'payment' },
              { label: 'onboarding' },
              { label: 'resignation' },
              { label: 'promo_benefits' },
              {
                baseLabel: 'exhibitors.faq.before_event',
                label: 'public_profile',
              },
            ]}
          />
        </Wrapper>

        <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" />

        <DatasourcePhotos>
          {(photos, size) => (
            <Gallery data={photos} size={size} label="event.gallery" />
          )}
        </DatasourcePhotos>
      </Layout>
    );
  }
}

export default connect()(PageExhibit);
