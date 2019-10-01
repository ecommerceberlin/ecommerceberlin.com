import {
  connect,
  MyHead as Head,
  VoteWithLinkedIn,
  WidgetVisitor,
  WidgetCallForPapers,
  WidgetVotable,
  WidgetSalesMap,
  WidgetVoteStatus,
  WidgetRoleButtons,
  LayoutMain as Layout,
} from 'eventjuicer-site-components';

/*
  'err',
  'req',
  'res',
  'pathname',
  'query',
  'asPath',
  'AppTree',
  'store',
  'isServer'
*/

const settings = require('../settings').default;

class PageVisit extends React.Component {
  static async getInitialProps(props) {
    const { query, asPath } = props;

    return {
      preload: ['callforpapers'],
      query: query,
      asPath: asPath,
      settings: settings,
    };
  }

  render() {
    const { query, asPath } = this.props;
    const { id, keyword } = query;

    return (
      <Layout>
        <Head />

        {id && (
          <WidgetVotable
            id={id}
            asPath={asPath}
            vote={<VoteWithLinkedIn id={id} />}
            status={<WidgetVoteStatus />}
          />
        )}

        <WidgetCallForPapers
          intro={<WidgetVoteStatus />}
          limit={350}
          //   filter={item => item.custom_admin_1 == 2 && item.avatar.indexOf("http")>-1 && item.logotype.indexOf("http")>-1}
          keyword_source="presentation_category"
          keyword={keyword}
        />

        <WidgetRoleButtons />

        <WidgetSalesMap
          label="exhibitors.map.title2"
          secondaryLabel="exhibitors.map.opensales"
          disabled={false}
        />

        <WidgetVisitor />
      </Layout>
    );
  }
}

export default connect()(PageVisit);
