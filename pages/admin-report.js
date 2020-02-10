import {
  connect,
  MyHead as Head,
  LayoutRaw as Layout,
  Wrapper,
  DatasourceAdminReport,
  MyTypography as Text,
  TwoColsLayout,
  Exhibitor,
} from 'eventjuicer-site-components';

import sortBy from 'lodash/sortBy';

const settings = require('../settings').default;

class PageAdminReport extends React.Component {
  static async getInitialProps({ query, isServer, store }) {
    return {
      preload: [],
      settings: settings,
      load: ['report'],
      query,
    };
  }

  render() {
    const { query } = this.props;
    const { range, sort } = query;

    const sorting = sort === 'booth' ? 'profile.booth' : 'company.name';
    const filter =
      range && range.length > 0
        ? function(item) {
            return (
              item.profile &&
              item.profile.booth &&
              range.indexOf(item.profile.booth.trim().charAt(0)) > -1
            );
          }
        : null;

    return (
      <Layout>
        <Head />
        <Wrapper>
          <DatasourceAdminReport filter={filter} sort={sorting}>
            {data =>
              data.map(exhibitor => {
                return <Exhibitor key={exhibitor.id} {...exhibitor} />;
              })
            }
          </DatasourceAdminReport>
        </Wrapper>
      </Layout>
    );
  }
}

export default connect(
  null,
  null,
)(PageAdminReport);
