//import dynamic from 'next/dynamic';

import {
  connect,
  MyHead as Head,
  MyLink as Link,
  DatasourceExhibitors,
  WidgetVisitor,
  WidgetAllExhibitorsAvatarlist,
  Wrapper,
  Bookingmap,
  Typography,
  Gallery,
  WidgetRoleButtons,
} from 'eventjuicer-site-components';

import Layout from '../src/Layout';

class PageExhibitors extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['exhibitors', 'bookingmap'],
    };
  }

  render() {
    const { exhibitors, booths } = this.props;

    return (
      <Layout>
        <Head />

        <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" first />

        <Wrapper label="exhibitors.map.title">
          {/* <h1>SCROLL </h1> */}
          <Bookingmap />
        </Wrapper>

        <WidgetRoleButtons />

        <WidgetVisitor label="visitors.are_you_visitor" />
      </Layout>
    );
  }
}

export default connect()(PageExhibitors);
