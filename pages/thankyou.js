import {
  connect,
  MyHead as Head,
  get as _get,
  WidgetVisitor,
  Typography,
  Wrapper,
  // WhoIsGonnaBeThere,
  MyTypography,
  Googlemap,
  LayoutMain as Layout,
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

class ThankyouPage extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    const person = `code/${query.hash}`;

    return {
      preload: [person, 'exhibitors'],
      asPath: asPath,
      settings: settings,
    };
  }

  render() {
    const { url, person, asPath } = this.props;

    const name = `${_get(person, 'fname', '')} ${_get(person, 'lname', '')}`;

    return (
      <Layout>
        <Head
          url={asPath}
          titleLabel={[
            'visitors.opengraph.title',
            {
              name: name,
              location: 'STATION Berlin',
              date: '13 Februrary 2020',
            },
          ]}
        />

        <Wrapper
          first
          label={['visitors.thankyou', { name: _get(person, 'fname', '') }]}
        />

        {/* <Wrapper label="visitors.attendees">
          <WhoIsGonnaBeThere />
        </Wrapper> */}

        <WidgetVisitor label="visitors.register_alt" />

        {/* <Googlemap /> */}
      </Layout>
    );
  }
}

export default connect()(ThankyouPage);
