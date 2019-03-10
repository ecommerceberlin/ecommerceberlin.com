import {
  connect,
  MyHead as Head,
  WidgetVisitor,
  WidgetPresenters,
  LayoutMain as Layout,
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

class PageAgenda extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['exhibitors', 'presenters'],
      settings: settings,
    };
  }

  render() {
    const { router } = this.props;

    return (
      <Layout>
        <Head />

        {/* <WidgetPresenters /> */}

        <WidgetVisitor label="visitors.register_alt" />
      </Layout>
    );
  }
}

export default connect(
  null,
  null,
)(PageAgenda);
