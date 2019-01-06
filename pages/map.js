import {
  connect,
  MyHead as Head,
  Typography,
  Wrapper,
  Bookingmap,
  //WidgetVisitor,
  LayoutMain as Layout,
} from 'eventjuicer-site-components';

class PageMap extends React.Component {
  static async getInitialProps({
    err,
    req,
    res,
    pathname,
    query,
    asPath,
    isServer,
    store,
  }) {
    return {
      settings: settings,
    };
  }

  render() {
    const { url } = this.props;

    return (
      <Layout>
        <Head />

        <Bookingmap zoom={3} />
      </Layout>
    );
  }
}

export default connect()(PageMap);
