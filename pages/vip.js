import { connect, DynamicPage } from 'eventjuicer-site-components';

const settings = require('../settings').default;

class PageVisit extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['exhibitors', 'presenters'],
      settings: settings,
    };
  }

  render() {
    const { url } = this.props;

    return <DynamicPage name="vip" url={url} />;
  }
}

export default connect()(PageVisit);
