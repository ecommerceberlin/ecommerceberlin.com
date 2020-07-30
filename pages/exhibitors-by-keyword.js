import {
  MyHead as Head,
  MyLink as Link,
  connect,
  WidgetVisitor,
  WidgetSalesMap,
  WidgetExhibitorsByKeyword,
  LayoutMain as Layout,
} from 'eventjuicer-site-components';


class PageExhibitorsByKeyword extends React.Component {
  static async getInitialProps({ query }) {
    return {
      preload: ['exhibitors', 'bookingmap', 'ticketgroups'],
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

        <WidgetSalesMap
          label="exhibitors.map.title"
          disabledTicketIds={[1821, 1822, 1819, 1820, 1836]}
        />
      </Layout>
    );
  }
}

PageExhibitorsByKeyword.settings = require('../settings').default;


export default connect()(PageExhibitorsByKeyword);
