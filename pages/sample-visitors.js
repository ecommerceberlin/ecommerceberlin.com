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
  Wrapper,
  Faq,
  LayoutMain as Layout,
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

class PageSampleVisitors extends React.Component {
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

        <WidgetVips first limit={10000} include={<div />} />

        <WidgetSalesMap
          label="exhibitors.map.title"
          secondaryLabel="exhibitors.map.opensales"
          disabledTicketIds={[1821, 1822, 1819, 1820, 1836]}
        />

        {/* <WidgetVideoWithReviews /> */}

        <WidgetExhibitorBenefits first label="exhibitors.benefits.title" />

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
      </Layout>
    );
  }
}

export default connect()(PageSampleVisitors);
