import { connect, DynamicPage } from 'eventjuicer-site-components';

 
class PageVisit extends React.Component {
  static async getInitialProps({ query, asPath, isServer, store }) {
    return {
      preload: ['exhibitors', 'presenters'],
       
    };
  }

  render() {
    const { url } = this.props;

    return <DynamicPage name="vip" url={url} />;
  }
}

PageVisit.settings  = require('../settings').default;

export default connect()(PageVisit);
