import {
  connect,
  MyHead as Head,
  WidgetVisitor,
  WidgetPresenters,
  LayoutMain as Layout,
} from 'eventjuicer-site-components';


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

        {/* <WidgetPresenters /> */}

        <WidgetVisitor label="visitors.register_alt" />
      </Layout>
    );
  }
}


PageAgenda.settings = require('../settings').default;

export default connect(
  null,
  null,
)(PageAgenda);
