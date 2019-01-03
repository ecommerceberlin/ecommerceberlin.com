import {
  connect,
  get as _get,
  MyHead as Head,
  // Typography,
  // Faq,
  // FaqLink,
  Wrapper,
  LayoutMain as Layout,
} from 'eventjuicer-site-components';

class PageFaq extends React.Component {
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
    return {};
  }

  render() {
    const { url } = this.props;

    return (
      <Layout>
        <Wrapper label="exhibitors.agreement">
          {/* <FaqLink url={url} /> */}

          {/* <Faq url={url} baseLabel="exhibitors.faq.agreement" items={[

          {label : "payment"},
          {label : "resignation"},
          {label : "standard_offering"},
      ]} /> */}
        </Wrapper>
      </Layout>
    );
  }
}

export default connect()(PageFaq);
