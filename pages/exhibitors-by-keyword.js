import {
  MyHead as Head,
  MyLink as Link,
  connect,
  WidgetVisitor,
  WidgetSalesMap,
  WidgetExhibitorsByKeyword,
} from 'eventjuicer-site-components';

import Layout from '../src/Layout';

class PageExhibitorsByKeyword extends React.Component {
  static async getInitialProps({ query }) {
    return {
      preload: ['exhibitors', 'bookingmap'],
      keyword: query.keyword,
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
