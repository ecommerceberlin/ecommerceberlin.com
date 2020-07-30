import { connect, DynamicPage } from 'eventjuicer-site-components';

 
class PagePresenters extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['presenters'],
    
    };
  }

  render() {
    const { url } = this.props;

    return <DynamicPage name="presenters" url={url} />;
  }
}

PagePresenters.settings = require('../settings').default;

export default connect()(PagePresenters);
