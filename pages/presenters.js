import {
  connect,
  MyHead as Head,
  WidgetVisitor,
  WidgetPresenters,
  WidgetSchedule,
  WidgetVideoWithEventInfo,
  // Typography,
  // Wrapper
} from 'eventjuicer-site-components';

import Layout from '../src/Layout';

class PagePresenters extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['presenters'],
    };
  }

  render() {
    const { url } = this.props;

    return (
      <Layout>
        <Head />

        <WidgetPresenters first filter={null} limit={null} />

        <WidgetVisitor label="visitors.register_alt" />

        <WidgetVideoWithEventInfo />

        <WidgetSchedule />

        <WidgetVisitor label="visitors.register" />

        {/* <Wrapper label="visitors.attendees">
          <WhoIsGonnaBeThere />
        </Wrapper> */}
      </Layout>
    );
  }
}

export default connect()(PagePresenters);
