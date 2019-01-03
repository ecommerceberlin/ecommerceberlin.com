import {
  connect,
  Gallery,
  MyHead,
  WidgetVideoWithEventInfo,
  WidgetVisitor,
  WidgetVisitorBenefits,
  WidgetPresenters,
  WidgetSchedule,
  WidgetAllExhibitorsAvatarlist,
  DatasourcePhotos as Photos,
  LayoutMain as Layout,
} from 'eventjuicer-site-components';

class PageVisit extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['exhibitors', 'presenters'],
    };
  }

  render() {
    const { url } = this.props;

    return (
      <Layout>
        <MyHead />

        <WidgetVisitor label="visitors.register_alt" first />

        <WidgetSchedule />

        <WidgetVideoWithEventInfo />

        <WidgetPresenters />

        <WidgetVisitor label="visitors.register" first />

        <WidgetVisitorBenefits label="visitors.benefits.title" />

        <WidgetAllExhibitorsAvatarlist label="exhibitors.list_full" />

        <WidgetVisitor label="visitors.register" first />

        <Photos>
          {(photos, size) => (
            <Gallery data={photos} size={size} label="event.gallery" />
          )}
        </Photos>
      </Layout>
    );
  }
}

export default connect()(PageVisit);
