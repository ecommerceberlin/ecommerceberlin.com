import dynamic from 'next/dynamic';

import {
  connect,
  MyLink as Link,
  Wrapper,
  Avatarlist,
  WidgetVideoWithEventInfo,
  WidgetVisitor,
  WidgetCompany,
  WidgetAllExhibitorsColumnList,
  //SalesMap,
  WidgetPresenters,
  WidgetSchedule,
  LayoutMain as Layout,
  WidgetRoleButtons,
} from 'eventjuicer-site-components';

import settings from '../settings';

class PageCompany extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    const company = `companies/${query.id}`;

    return {
      asPath: asPath,
      preload: [company, 'exhibitors', 'bookingmap'],
      company_id: query.id,
      settings: settings,
    };
  }

  render() {
    const { company_id, exhibitors, asPath } = this.props;

    return (
      <Layout>
        <WidgetCompany id={company_id} asPath={asPath} />

        <WidgetVideoWithEventInfo />

        <WidgetVisitor />

        <WidgetSchedule />

        <WidgetVisitor />

        <WidgetRoleButtons />

        <WidgetAllExhibitorsColumnList />
      </Layout>
    );
  }
}

export default connect()(PageCompany);
