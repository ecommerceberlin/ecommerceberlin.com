//import dynamic from 'next/dynamic';

import {
  connect,
  MyHead as Head,
  WidgetVisitor,
  WidgetAllExhibitorsAvatarlist,
  WidgetSalesMap,
  WidgetRoleButtons,
  LayoutMain as Layout,
} from 'eventjuicer-site-components';


class PageExhibitors extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['exhibitors', 'allexhibitors', 'bookingmap'],

    };
  }

  render() {
    const { exhibitors, booths } = this.props;

    return (
      <Layout>
        <Head />

        <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" first />

        <WidgetSalesMap
          label="exhibitors.map.title"
          disabledTicketIds={[1821, 1822, 1819, 1820, 1836]}
        />

        <WidgetRoleButtons />

        <WidgetVisitor label="visitors.are_you_visitor" />
      </Layout>
    );
  }
}

PageExhibitors.settings = require('../settings').default;

export default connect()(PageExhibitors);
