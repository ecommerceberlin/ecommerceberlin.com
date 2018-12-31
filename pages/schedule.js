import {
  MyHead as Head,
  connect,
  WidgetVisitor,
  WidgetPresenters,
  WidgetSchedule,
  WidgetVideoWithEventInfo,
  // Typography,
  // Wrapper,
} from 'eventjuicer-site-components';

import Layout from '../src/Layout';

class PageSchedule extends React.Component {
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

        <WidgetSchedule first />

        <WidgetVisitor label="visitors.register_alt" />

        <WidgetVideoWithEventInfo />

        <WidgetPresenters filter={null} />

        <WidgetVisitor label="visitors.register" />

        {/* 
        <Wrapper label="visitors.attendees">
          <WhoIsGonnaBeThere />
         </Wrapper> 
        */}
      </Layout>
    );
  }
}

export default connect()(PageSchedule);
