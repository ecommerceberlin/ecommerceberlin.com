import { connect, DynamicPage } from 'eventjuicer-site-components';

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

    return <DynamicPage name="presenters" url={url} />;
  }
}

export default connect()(PagePresenters);
