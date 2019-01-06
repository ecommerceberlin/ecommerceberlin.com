import {
  MyHead as Head,
  MyLink as Link,
  connect,
  WidgetVisitor,
  WidgetSalesMap,
  WidgetExhibitorsByKeyword,
  LayoutMain as Layout,
} from 'eventjuicer-site-components';

import settings from '../settings';

class PageExhibitorsByKeyword extends React.Component {
  static async getInitialProps({ query }) {
    return {
      preload: ['exhibitors', 'bookingmap'],
      keyword: query.keyword,
      settings: settings,
    };
  }

  render() {
    const { keyword } = this.props;

    return (
      <Layout>
        <Head />

        <WidgetExhibitorsByKeyword keyword={keyword} />

        <WidgetVisitor
          label="visitors.register"
          color="#ffffff"
          links={[
            <Link
              key="visit"
              href="/visit"
              label="visitors.more_info"
              variant="text"
              color="secondary"
            />,
          ]}
        />

        <WidgetSalesMap label="exhibitors.map.title" />
      </Layout>
    );
  }
}

export default connect()(PageExhibitorsByKeyword);
