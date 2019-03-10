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

const settings = require('../settings').default;

class PageExhibitors extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['exhibitors', 'allexhibitors', 'bookingmap'],
      settings: settings,
    };
  }

  render() {
    const { exhibitors, booths } = this.props;

    return (
      <Layout>
        <Head />

        <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" first />

        {/* <WidgetSalesMap label="exhibitors.map.title" /> */}

        <WidgetRoleButtons />

        <WidgetVisitor label="visitors.are_you_visitor" />
      </Layout>
    );
  }
}

export default connect()(PageExhibitors);
