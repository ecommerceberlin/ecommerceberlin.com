import {
  connect,
  MyHead as Head,
  WidgetPresenters,
  MyTypography,
  LayoutMain as Layout,
} from 'eventjuicer-site-components';

import settings from '../settings';

class PageAgendaPreview extends React.Component {
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

        <WidgetPresenters limit={null} filter={null} link={true} />
      </Layout>
    );
  }
}

export default connect()(PageAgendaPreview);
