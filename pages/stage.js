import {
  connect,
  MyHead as Head,
  Typography,
  Wrapper,
  Stage,
} from 'eventjuicer-site-components';

import Layout from '../src/Layout';

class PageStage extends React.Component {
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
    return { stage: query.stage };
  }

  render() {
    const { url, stage } = this.props;

    return (
      <Layout>
        <Head />

        <Wrapper first label={`Scena ${stage.toUpperCase()}`}>
          <Stage stage={stage} />
        </Wrapper>
      </Layout>
    );
  }
}

export default connect()(PageStage);
