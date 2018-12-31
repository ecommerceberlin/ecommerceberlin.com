import {
  connect,
  MyHead as Head,
  WidgetPresenters,
  MyTypography,
} from 'eventjuicer-site-components';

import Layout from '../src/Layout';

class PageAgendaPreview extends React.Component {
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

        <WidgetPresenters limit={null} filter={null} link={true} />
      </Layout>
    );
  }
}

export default connect()(PageAgendaPreview);
