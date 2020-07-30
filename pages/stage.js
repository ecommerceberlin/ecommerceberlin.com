import {
  connect,
  MyHead as Head,
  Typography,
  Wrapper,
  Stage,
  LayoutMain as Layout,
} from 'eventjuicer-site-components';


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
    return {
      stage: query.stage,
   
    };
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

PageState.settings = require('../settings').default;


export default connect()(PageStage);
