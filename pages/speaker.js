import {
  connect,
  WidgetVisitor,
  WidgetFeaturedExhibitors,
  WidgetPresenter,
  WidgetSchedule,
  WidgetVideoWithEventInfo,
  LayoutMain as Layout,
  WidgetRoleButtons,
} from 'eventjuicer-site-components';

const settings = require('../settings').default;

class PageSpeaker extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['presenters', 'exhibitors'],
      asPath: asPath,
      speakerId: query.id,
      settings: settings,
    };
  }

  render() {
    const { speakerId, asPath } = this.props;

    // if (!speaker) {
    //   return <Error statusCode={404} />;
    // }

    return (
      <Layout>
        <WidgetPresenter id={speakerId} asPath={asPath} />

        {/* <WidgetSchedule selected={speakerId} /> */}

        <WidgetVideoWithEventInfo />

        <WidgetVisitor label="visitors.register_alt" />

        <WidgetRoleButtons />

        <WidgetFeaturedExhibitors label="exhibitors.list_featured" />
      </Layout>
    );
  }
}

export default connect()(PageSpeaker);
