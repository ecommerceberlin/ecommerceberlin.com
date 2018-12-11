//import dynamic from 'next/dynamic';

import {
  connect,
  MyHead as Head,
  MyLink as Link,
  LayoutMain as Layout,
  DatasourceExhibitors,
  WidgetVisitor,
  WidgetRoleButtons,
  WidgetAllExhibitorsAvatarlist,
  Wrapper,
  Bookingmap,
  Typography,
  Gallery,
} from 'eventjuicer-site-components';

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
