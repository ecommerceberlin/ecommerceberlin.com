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


class PageSpeaker extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['presenters', 'exhibitors'],
      asPath: asPath,
      speakerId: query.id,
    
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

PageSpeaker.settings = require('../settings').default;


export default connect()(PageSpeaker);
