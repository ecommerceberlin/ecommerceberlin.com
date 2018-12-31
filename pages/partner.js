import {
  MyHead as Head,
  connect,
  WidgetVisitor,
} from 'eventjuicer-site-components';

import Layout from '../src/Layout';

class PagePartner extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {};
  }

  render() {
    return (
      <Layout>
        <Head />
        <WidgetVisitor label="visitors.register_alt" />
      </Layout>
    );
  }
}

export default connect()(PagePartner);
