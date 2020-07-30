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
  WidgetVips,
  MyTypography as Typography,
  Markdown,
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


class PageVisit extends React.Component {
  static async getInitialProps(props) {
    const { query, asPath } = props;

    return {
      preload: ['callforpapers'],
      query: query,
      asPath: asPath,
     
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
          intro={
            <div style={{ width: '80%' }}>
              <WidgetVoteStatus />
              <Typography template="benefitsText">
                <Markdown label="callforpapers.voting.general-rules.description" />
              </Typography>
            </div>
          }
          limit={350}
          filter={item =>
            item.presentation_description.length > 10 &&
            item.avatar.indexOf('http') > -1 &&
            item.logotype.indexOf('http') > -1
          }
          keyword_source="presentation_category"
          keyword={keyword}
          label={
            keyword
              ? 'callforpapers.list.title'
              : 'callforpapers.categories.title'
          }
          show_votes={true}
        />

        {id && <WidgetVisitor />}

        {id && <WidgetVips limit={12} mobile={4} />}

        {/* {id && (
          <WidgetSalesMap
            label="exhibitors.map.title2"
            secondaryLabel="exhibitors.map.opensales"
            disabled={false}
          />
        )} */}

        <WidgetRoleButtons />
      </Layout>
    );
  }
}

PageVisit.settings = require('../settings').default;


export default connect()(PageVisit);
