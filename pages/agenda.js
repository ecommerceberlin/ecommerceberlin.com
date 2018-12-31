import {
  connect,
  MyHead as Head,
  WidgetVisitor,
  WidgetPresenters,
} from 'eventjuicer-site-components';

import Layout from '../src/Layout';

class PageAgenda extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['exhibitors', 'presenters'],
    };
  }

  render() {
    const { router } = this.props;

    return (
      <Layout>
        <Head />

        <WidgetPresenters />

        <WidgetVisitor label="visitors.register_alt" />
      </Layout>
    );
  }
}

export default connect(
  null,
  null,
)(PageAgenda);
