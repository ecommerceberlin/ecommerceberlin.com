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
import { isNull } from 'util';



class PageAdminReport extends React.Component {
  static async getInitialProps({ query, isServer, store }) {
    return {
      preload: [],
      load: ['report'],
      query,
    };
  }

  render() {
    const { query } = this.props;
    const { range, sort, service } = query;

    const sorting = sort === 'booth' ? 'profile.booth' : 'company.name';

    let _filter =
      range && range.length > 0
        ? function(item) {
            return (
              'booth' in item.profile &&
              item.profile.booth &&
              range.split(',').includes(item.profile.booth.trim().charAt(0))
            );
          }
        : function() {
            return true;
          };

    const filterByService = function(item) {
      return (
        'purchases' in item &&
        Array.isArray(item.purchases) &&
        item.purchases.filter(p => p.role === 'service_' + service).length
      );
    };

    // if( service && ["internal","external"].includes(service) ){
    //   _filter = function(item){ return item => _filter(item) && filterByService(item) }
    // }

    return (
      <Layout>
        <Head />
        <Wrapper>
          <DatasourceAdminReport filter={_filter} sort={sorting}>
            {data =>
              data.map(exhibitor => (
                <Exhibitor key={exhibitor.id} {...exhibitor} />
              ))
            }
          </DatasourceAdminReport>
        </Wrapper>
      </Layout>
    );
  }
}

PageAdminReport.settings = require('../settings').default;

export default connect(
  null,
  null,
)(PageAdminReport);
