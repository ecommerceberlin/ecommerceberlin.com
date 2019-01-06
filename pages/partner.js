import {
  MyHead as Head,
  connect,
  WidgetVisitor,
  LayoutMain as Layout,
} from 'eventjuicer-site-components';

import settings from '../settings';

class PagePartner extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      settings: settings,
    };
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
