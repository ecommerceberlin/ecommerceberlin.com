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
  WidgetRoleButtons,
  WidgetPresenters,
  WidgetSchedule,
} from 'eventjuicer-site-components';

import Layout from '../src/Layout';

class PageCompany extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    const company = `companies/${query.id}`;

    return {
      asPath: asPath,
      preload: [company, 'exhibitors', 'bookingmap'],
      company_id: query.id,
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
