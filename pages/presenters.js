import {
  connect,
  MyHead as Head,
  WidgetVisitor,
  WidgetPresenters,
  WidgetSchedule,
  WidgetVideoWithEventInfo,
  // Typography,
  // Wrapper,
  LayoutMain as Layout,
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

class PagePresenters extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['presenters'],
      settings: settings,
    };
  }

  render() {
    const { url } = this.props;

    return (
      <Layout>
        <Head />

        <WidgetPresenters
          first
          bio={true}
          label="presenters.list_all"
          disableTemps={true}
          limit={null}
          filter={function(item) {
            return (
              item.avatar.indexOf('http') > -1 &&
              item.logotype.indexOf('http') > -1 &&
              item.bio.length > 20
            );
          }}
        />

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
