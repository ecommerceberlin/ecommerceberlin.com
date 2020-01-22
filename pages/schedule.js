import { connect, DynamicPage } from 'eventjuicer-site-components';

const settings = require('../settings').default;

class PageSchedule extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['presenters'],
      settings: settings,
    };
  }

  render() {
    const { url } = this.props;

    return <DynamicPage name="schedule" url={url} />;
  }
}

export default connect()(PageSchedule);
